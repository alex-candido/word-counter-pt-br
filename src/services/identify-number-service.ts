export default function identifyNumberService(text: string, words: IWord[]) {
    const startTime = performance.now();
    const regexp =
        /\b([A-Za-záàâãéèêíÍïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+)(ão|ões|ês|éis|inhas|zões|zinhos|otes|is|os|as|s)\b/gi;

    const wordsNumber: { word: string; prefix: string; suffix: string }[] =
        Array.from(text.matchAll(regexp)).map((match) => ({
            word: match[0].toLowerCase(),
            prefix: match[1].toLowerCase(),
            suffix: match[2].toLowerCase(),
        }));

    let numberFoundCount: number = 0;
    let numberNotFoundCount: number = 0;

    const numberFoundPositions: number[] = [];
    const numberNotFoundPositions: number[] = [];
    const numberNotFoundWords: IWord[] = [];

    const NumberMatchWords: IWord[] = words
        .map((wordObj, index) => {
            const match = wordsNumber.find(
                (wn) => wn.word === wordObj.word.toLowerCase(),
            );

            if (match) {
                numberFoundCount++;
                numberFoundPositions.push(index);
                return {
                    ...wordObj,
                    details: {
                        prefix: match.prefix,
                        suffix: match.suffix,
                        variations: [''],
                        synonyms: [''],
                    },
                };
            } else {
                numberNotFoundCount++;
                numberNotFoundPositions.push(index);
                numberNotFoundWords.push({
                    ...wordObj,
                    details: {
                        prefix: '',
                        suffix: '',
                        variations: [''],
                        synonyms: [''],
                    },
                });
            }

            return null;
        })
        .filter((word) => word !== null) as IWord[];

    const numberTotalPositions = numberFoundPositions.length + numberNotFoundPositions.length;

    const endTime = performance.now();
    const numberExecutionTime = endTime - startTime;

    return {
        NumberMatchWords,
        numberFoundCount,
        numberNotFoundCount,
        numberFoundPositions,
        numberNotFoundPositions,
        numberNotFoundWords,
        numberTotalPositions,
        numberExecutionTime,
    };
}
