import { changeIsvSearchLetters, setInterfaceLang, setAlphabets, changeIsvSearchByWordForms } from 'actions';
import { Selector } from 'components/Selector';
import * as React from 'react';
import { t } from 'translations';
import { Checkbox } from '../Checkbox';
import './index.scss';
import { useDispatch } from 'react-redux';
import { useInterfaceLang } from 'hooks/useInterfaceLang';
import { useAlphabets } from 'hooks/useAlphabets';
import { useIsvSearchLetters } from 'hooks/useIsvSearchLetters';
import { useResults } from 'hooks/useResults';
import { useIsvSearchByWordForms } from 'hooks/useIsvSearchByWordForms';

const interfaceLanguageList = [
    {
        name: 'English',
        value: 'en',
    },
    {
        name: 'Medžuslovjansky',
        value: 'isv-Latn',
    },
    {
        name: 'Меджусловјанскы',
        value: 'isv-Cyrl',
    },
    {
        name: 'Ⰿⰵⰴⰶⱆⱄⰾⱁⰲⰺⰰⱀⱄⰽⱐⰹ',
        value: 'isv-Glag',
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
        name: 'Polski',
        value: 'pl',
    },
    {
        name: 'Česky',
        value: 'cs',
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
    {
        name: 'Български',
        value: 'bg',
    },
];

export const Settings: React.FC =
    () => {
        const dispatch = useDispatch();
        const interfaceLang = useInterfaceLang();
        const alphabets = useAlphabets();
        const isvSearchLetters = useIsvSearchLetters();
        const isvSearchByWordForms = useIsvSearchByWordForms();
        useResults();

        return (
            <div className={'settings'}>
                <h4>{t('settingsTitle')}</h4>
                <hr/>
                <h5>{t('interfaceLanguage')}</h5>
                <Selector
                    options={interfaceLanguageList}
                    value={interfaceLang}
                    onSelect={(langCode: string) => dispatch(setInterfaceLang(langCode))}
                />
                <hr/>
                <h5>{t('searchSensitiveLettersForInterslavic')}</h5>
                <div className={'settings__isv-search-letters'}>
                    <h6>{t('standardOrthography')}</h6>
                    <Checkbox
                        title={'ž š č (ж ш ч)'}
                        checked={isvSearchLetters.from.includes('ž')}
                        onChange={() => dispatch(changeIsvSearchLetters('žšč'))}
                    />
                    <Checkbox
                        title={'ě (є)'}
                        checked={isvSearchLetters.from.includes('ě')}
                        onChange={() => dispatch(changeIsvSearchLetters('ě'))}
                    />
                    <Checkbox
                        title={'y (ы)'}
                        checked={isvSearchLetters.from.includes('y')}
                        onChange={() => dispatch(changeIsvSearchLetters('y'))}
                    />
                    <h6>{t('etymologicalOrthography')}</h6>
                    <Checkbox
                        title={'å'}
                        checked={isvSearchLetters.from.includes('å')}
                        onChange={() => dispatch(changeIsvSearchLetters('å'))}
                    />
                    <Checkbox
                        title={'ę ų'}
                        checked={isvSearchLetters.from.includes('ę')}
                        onChange={() => dispatch(changeIsvSearchLetters('ęų'))}
                    />
                    <Checkbox
                        title={'ė ȯ'}
                        checked={isvSearchLetters.from.includes('ȯ')}
                        onChange={() => dispatch(changeIsvSearchLetters('ėȯ'))}
                    />
                    <Checkbox
                        title={'ŕ'}
                        checked={isvSearchLetters.from.includes('ŕ')}
                        onChange={() => dispatch(changeIsvSearchLetters('ŕ'))}
                    />
                    <Checkbox
                        title={'ĺ ń'}
                        checked={isvSearchLetters.from.includes('ĺ')}
                        onChange={() => dispatch(changeIsvSearchLetters('ĺń'))}
                    />
                    <Checkbox
                        title={'t́ d́'}
                        checked={isvSearchLetters.from.includes('ť')}
                        onChange={() => dispatch(changeIsvSearchLetters('ťď'))}
                    />
                    <Checkbox
                        title={'ś ź'}
                        checked={isvSearchLetters.from.includes('ś')}
                        onChange={() => dispatch(changeIsvSearchLetters('śź'))}
                    />
                    <Checkbox
                        title={'ć'}
                        checked={isvSearchLetters.from.includes('ć')}
                        onChange={() => dispatch(changeIsvSearchLetters('ć'))}
                    />
                    <Checkbox
                        title={'đ'}
                        checked={isvSearchLetters.from.includes('đ')}
                        onChange={() => dispatch(changeIsvSearchLetters('đ'))}
                    />
                </div>
                <hr/>
                <h5>{t('searchByIsvWordForms')}</h5>
                <Checkbox
                    title={t('enable')}
                    checked={isvSearchByWordForms}
                    onChange={() => dispatch(changeIsvSearchByWordForms(!isvSearchByWordForms))}
                />
                <hr/>
                <h5>{t('showSlavicWordsInAlphabets')}</h5>
                <Checkbox
                    title={t('latin')}
                    checked={alphabets.latin}
                    onChange={() => dispatch(setAlphabets({latin: !alphabets.latin}))}
                />
                <Checkbox
                    title={t('cyrillic')}
                    checked={alphabets.cyrillic}
                    onChange={() => dispatch(setAlphabets({cyrillic: !alphabets.cyrillic}))}
                />
                <Checkbox
                    title={t('glagolitic')}
                    checked={alphabets.glagolitic}
                    onChange={() => dispatch(setAlphabets({glagolitic: !alphabets.glagolitic}))}
                />
            </div>
        );
    };
