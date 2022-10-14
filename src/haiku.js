// Function To Check The Number Of Lines
export const checkLines = (sentences) =>{
    return sentences.split("\n").length === 3;
}

// Function To Count The Amount Of Vowels
export const vowelCounter = (sentence) => {
    return (/[aeiouy]/gi).test(sentence)?sentence.match(/[aeiouy]/gi).length:0;
}

// Function To Count The Amount Of Diphthongs
export const silentVowelCounter = (sentence) => {
    const silentA = (/ally\b/gi).test(sentence) ? sentence.match(/ally\b/gi).length : 0;
    const silentE = (/e\b/gi).test(sentence) ? sentence.match(/e\b/gi).length : 0;
    const silentED = (/ed\b/gi).test(sentence) ? sentence.match(/ed\b/gi).length : 0;
    const silentU = (/gu[aeiouy]/gi).test(sentence) ? sentence.match(/gu[aeiouy]/gi).length : 0;
    const silentI = (/business/gi).test(sentence) ? sentence.match(/business/gi).length : 0;
    return silentA + silentE + silentED + silentU + silentI;
};

// Function To Count Diphthongs
export const diphthongsCounter = (sentence) => {
    const diphthongs = (/[aeiouy][aeiouy]/gi).test(sentence) ? sentence.match(/[aeiouy][aeiouy]/gi).length : 0;
    return diphthongs;
}

// Function To Count The Amount Of Syllables In A Text
export const syllablesCounter = (sentence) => {
    return vowelCounter(sentence) - silentVowelCounter(sentence) - diphthongsCounter(sentence);
}

// Function For haiku Checker{
export const haikuChecker = (text) => {
    if(!(checkLines(text))) {
        return false
    }
    const [line1 , line2 , line3] = text.split("\n");
    const verifyLine1 = syllablesCounter(line1);
    const verifyLine2 = syllablesCounter(line2);
    const verifyLine3 = syllablesCounter(line3);
    return verifyLine1 === 5 && verifyLine2 === 7 && verifyLine3 === 5;
}