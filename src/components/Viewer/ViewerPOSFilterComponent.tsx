import { render } from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { t } from 'translations';
import { Checkbox } from 'components/Checkbox';
import { partOfSpeechList, genderList, Gender, getPartOfSpeech, getGender } from 'utils/wordDetails';
import ExpandSubListIcon from './images/expand-sub-list-icon.svg';

import './ViewerPOSFilterComponent.scss';
import { values } from '@ag-grid-community/core/dist/es6/utils/generic';
import classNames from 'classnames';

const nounFilterList = [
    ...genderList,
    'animated',
    'inanimate',
    'plural',
    'singular',
].map((type) => `noun-${type}`);

const allFilterList = [
    ...partOfSpeechList,
    ...nounFilterList,
];

const globalFiltersState = {
    noun: {
        masculine: true,
        feminine: true,
        neuter: true,
        masculineOrFeminine: true,
        animated: true,
        inanimate: true,
        plural: true,
        singular: true,
    },
    adjective: true,
    adverb: true,
    conjunction: true,
    preposition: true,
    pronoun: {
        personal: true,
        demonstrative: true,
        indefinite: true,
        reflexive: true,
        relative: true,
        possessive: true,
        interrogative: true,
        negative: true,
        universal: true,
    },
    interjection: true,
    verb: {
        intransitive: true,
        transitive: true,
        auxiliar: true,
        reflexive: true,
        imperfective: true,
        perfective: true,
        imperfectiveOrPerfective: true,
    },
    numeral: {
        cardinal: true,
        collective: true,
        fractional: true,
        substantivized: true,
        differential: true,
        multiplicative: true,
        ordinal: true,
    },
};

const setFiltersAll = (value: boolean) => Object.keys(globalFiltersState).forEach((key) => {
    if (typeof globalFiltersState[key] === 'boolean') {
        globalFiltersState[key] = value;
    } else {
        Object.keys(globalFiltersState[key]).forEach((subKey) => {
            globalFiltersState[key][subKey] = value;
        });
    }
});

const POSFilterComponentReact = ({ agParams, resetEvent }: { agParams: any, resetEvent: (callback: any) => void }) => {
    const [rerender, setRerender] = useState(false);
    const expandedState = useRef(new Map(Object.keys(globalFiltersState).filter((key) => typeof globalFiltersState[key] !== 'boolean').map((key) => [key, false])));

    const filterResetCallback = useCallback((event) => {
        setFiltersAll(true);
    }, []);

    useEffect(() => {
        resetEvent(filterResetCallback);
    }, []);

    useEffect(() => {

        agParams.filterChangedCallback();
    }, []);

    const allCheckedLength = Object.keys(globalFiltersState).filter((key) => {
        const value = globalFiltersState[key];
        if (typeof value === 'boolean') {
            return value;
        } else {
            return Object.values(value).filter(Boolean).length !== 0;
        }
    }).length;

    const allChecked = allCheckedLength !== 0;
    const allPart = allCheckedLength !== Object.keys(globalFiltersState).length;

    const onChange = useCallback((key: string, subKey?: string) => {
        if (key === 'all') {
            const allCheckedLength = Object.keys(globalFiltersState).filter((key) => {
                const value = globalFiltersState[key];
                if (typeof value === 'boolean') {
                    return value;
                } else {
                    return Object.values(value).filter(Boolean).length !== 0;
                }
            }).length;

            setFiltersAll(allCheckedLength === 0);
            setRerender(!rerender);
            return;
        }
        const value = globalFiltersState[key];

        if (typeof subKey === 'undefined') {
            const hasFilter = typeof value !== 'boolean';
            if (hasFilter) {
                const subKeys = Object.keys(value);
                const newValue = subKeys.filter((subKey) => value[subKey]).length === 0;

                Object.keys(value).forEach((subKey) => {
                    value[subKey] = newValue;
                });
            } else {
                globalFiltersState[key] = !globalFiltersState[key];
            }
        } else {
            value[subKey] = !value[subKey];
        }

        setRerender(!rerender);
    }, [rerender]);

    const onExpandClick = useCallback((key) => {
        expandedState.current.set(key, !expandedState.current.get(key));
        // console.log(key, expandedState.current.get(key));
        setRerender(!rerender);
    }, [rerender]);

    return (
        <>
            <p className={'bold text-s'}>
                {t('viewerPosFilter')}
            </p>
            <div className={'viewer-pos-filter__list'}>
                <Checkbox
                    key={'all'}
                    title={t('viewerFiltersAll')}
                    checked={allChecked}
                    part={allPart}
                    onChange={() => (onChange('all'))}
                />
                {Object.keys(globalFiltersState).map((key) => {
                    const value = globalFiltersState[key];
                    const subFilter = typeof value !== 'boolean';
                    const subFilterKeys = Object.keys(value);
                    const subFilterValuesLength = Object.values(value).filter(Boolean).length;
                    const checked = subFilter ? subFilterValuesLength !== 0 : value;
                    const part = subFilter && subFilterValuesLength !== subFilterKeys.length;

                    return (
                        <>
                            <div className={'viewer-pos-filter__line'}>
                                <Checkbox
                                    key={key}
                                    title={t(key)}
                                    checked={checked}
                                    part={part}
                                    onChange={() => onChange(key)}
                                />
                                {subFilter && (
                                    <span
                                        className={classNames('viewer-pos-filter__expand-btn', {
                                            expanded: expandedState.current.get(key),
                                        })}
                                        onClick={() => onExpandClick(key)}
                                    >
                                        <ExpandSubListIcon/>
                                    </span>
                                )}
                            </div>
                            {subFilter && (
                                <div
                                    className={classNames('viewer-pos-filter__sub-list', {
                                        expanded: expandedState.current.get(key),
                                    })}
                                >
                                    {Object.keys(value).map((subKey) => (
                                        <Checkbox
                                            key={subKey}
                                            title={t(`${key}-${subKey}`)}
                                            checked={value[subKey]}
                                            onChange={() => onChange(key, subKey)}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    );
                })}
            </div>
        </>
    );
};

export class ViewerPOSFilterComponent {
    private agParams: any;
    private mainElement: HTMLDivElement;
    private resetCallback: () => void;

    public init(agParams) {
        this.agParams = agParams;
        this.mainElement = document.createElement('div');
        this.mainElement.className = 'viewer-pos-filter';

        this.resetEvent = this.resetEvent.bind(this);

        render(<POSFilterComponentReact agParams={agParams} resetEvent={this.resetEvent} />, this.mainElement);
    }

    public doesFilterPass(params) {
        let passed = true;

        return passed;
    }

    public isFilterActive() {
        return false; // Array.from(globalFiltersState).filter(Boolean).length !== allFilterList.length;
    }

    public setModel(model) {
        if (!model && this.resetCallback) {
            this.resetCallback();
        }
    }

    public getModel() {
        return Object.keys(globalFiltersState);
    }

    public getGui() {
        return this.mainElement;
    }

    private resetEvent(callback) {
        this.resetCallback = callback;
    }
}
