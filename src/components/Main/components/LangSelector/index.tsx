import * as React from 'react';
import { connect } from 'react-redux';
import { Selector } from '../Selector';
import './index.scss';
import { fromAction, toAction } from 'actions';

interface ILangSelectorProps {
    from: string;
    to: string;
    onSelect: (from: string, to: string) => void;
}

const languageList = [
    {
        name: 'English',
        value: 'en',
    },
    {
        name: 'Русский',
        value: 'ru',
    },
    {
        name: 'Українська',
        value: 'uk',
    },
    {
        name: 'Беларуская',
        value: 'be',
    },
    {
        name: 'Česky',
        value: 'cs',
    },
    {
        name: 'Polski',
        value: 'pl',
    },
    {
        name: 'Slovenský',
        value: 'sk',
    },
    {
        name: 'Slovenščina',
        value: 'sl',
    },
    {
        name: 'Български',
        value: 'bg',
    },
    {
        name: 'Hrvatski',
        value: 'hr',
    },
    {
        name: 'Српски',
        value: 'sr',
    },
    {
        name: 'Македонски',
        value: 'mk',
    },
];

class LangSelector extends React.Component<ILangSelectorProps> {
    public render() {
        return (
            <div className={'input-group langSelect'}>
                {this.renderLangPart('from')}
                <div className={'langItem changeDir'}>
                    <button
                        type={'button'}
                        style={{textDecoration: 'none'}}
                        className={'btn btn-link changeLang'}
                        onClick={() => this.props.onSelect(this.props.to, this.props.from)}
                    >
                        ⇄
                    </button>
                </div>
                {this.renderLangPart('to')}
            </div>
        );
    }
    private renderLangPart(dir: string) {
        const langCode = this.props[dir];
        if (langCode === 'isv') {
            return (
                <div className={'langItem isv'}>
                    <label className={'input-group-text langItem'}>Interslavic</label>
                </div>
            );
        }
        return (
            <div className={'langItem another'}>
                <Selector
                    options={languageList}
                    value={langCode}
                    onSelect={(langCode: string) => {
                        if (dir === 'from') {
                            this.props.onSelect(langCode, this.props.to);
                        }
                        if (dir === 'to') {
                            this.props.onSelect(this.props.from, langCode);
                        }
                    }}
                />
            </div>
        );
    }
}

function mapStateToProps({from, to}) {
    return {from, to};
}

function mapDispatchToProps(dispatch) {
    return {
        onSelect: (from, to) => {
            dispatch(fromAction(from));
            dispatch(toAction(to));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector);
