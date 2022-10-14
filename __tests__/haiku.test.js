import {checkLines , vowelCounter , silentVowelCounter , diphthongsCounter , syllablesCounter , haikuChecker} from '../src/haiku';

describe ("checkLines" , ()=>{
    test("Function should be able to count the amount of lines in a text" , ()=>{
        let text = "Function should be able to count the amount of lines in a text\nFunction should be able to count the amount of lines in a text\nFunction should be able to count the amount of lines in a text";
        expect(checkLines(text)).toEqual(true);
    });
});

describe("vowelCounter" , ()=>{
    test("Function should be able to count the amount of vowels in a text" , ()=>{
        let text = "This is a test";
        expect(vowelCounter(text)).toEqual(4);
    });
})

describe("silentVowelCounter" , ()=>{
    test("Function should be able to return the all silent vowel" , ()=>{
        let text = "This is really guided guy";
        expect(silentVowelCounter(text)).toEqual(4);
    })
})

describe("diphthongsCounter" , ()=>{
    test("Function should be able to count the amount of dipthongs" , ()=>{
        let text = "This is a beat for a seat";
        expect(diphthongsCounter(text)).toEqual(2);
    })
})

describe("syllablesCounter" , ()=>{
    test("Function should be able to count the amount of syllables in a sentence" , () =>{
        let text = "Worry is for fools";
        expect(syllablesCounter(text)).toEqual(5);
    })
})

describe("haikuChecker" , () =>{
    test("Function should check if poem is an haiku poem or not" , ()=>{
        let text = "A world of dew\nAnd within every dewdrop\nA world of struggle.";
        expect(haikuChecker(text)).toEqual(false)
    })
})