import { dictionaryUrl } from 'consts';
import * as fs from 'fs';
import request from 'request';
import { conjugationVerb } from 'utils/legacy/conjugationVerb';
import { declensionAdjective } from 'utils/legacy/declensionAdjective';
import { declensionNoun } from 'utils/legacy/declensionNoun';
import { declensionNumeral } from 'utils/legacy/declensionNumeral';
import { declensionPronoun } from 'utils/legacy/declensionPronoun';
import {
    getGender, getNumeralType,
    getPartOfSpeech, getPronounType,
    isAnimated, isIndeclinable,
    isPlural, isSingular,
} from 'utils/wordDetails';

const testCases = {
    noun: [],
    verb: [],
    adjective: [],
    pronoun: [],
    numeral: [],
};

request(dictionaryUrl, (err, data) => {
    const splittedBody = data.body.replace(/#/g, '').split('\n').filter(Boolean).slice(1);
    splittedBody.forEach((line, i) => {
        const [ word, add, details ] = line.split('\t').slice(0, 3);
        switch (getPartOfSpeech(details)) {
            case 'noun':
                const gender = getGender(details.replace('m./f.', 'm.' ));
                const animated = isAnimated(details);
                const plural = isPlural(details);
                const singular = isSingular(details);
                const indeclinable = isIndeclinable(details);

                testCases.noun.push({
                    init: { word, add, details },
                    expected: declensionNoun(word, add, gender, animated, plural, singular, indeclinable),
                });
                break;
            case 'verb':
                testCases.verb.push({
                    init: { word, add, details },
                    expected: conjugationVerb(word, add.replace(/\(|\)/g, '')),
                });
                break;
            case 'adjective':
                testCases.adjective.push({
                    init: { word, add, details },
                    expected: declensionAdjective(word, ''),
                });
                break;
            case 'pronoun':
                testCases.pronoun.push({
                    init: { word, add, details },
                    expected: declensionPronoun(word, getPronounType(details)),
                });
                break;
            case 'numeral':
                testCases.numeral.push({
                    init: { word, add, details },
                    expected: declensionNumeral(word, getNumeralType(details)),
                });
                break;
        }
        if (i + 1 === splittedBody.length) {
            fs.writeFileSync('./tests/testCases.json', JSON.stringify(testCases, null, 2));
        }
    });
});
