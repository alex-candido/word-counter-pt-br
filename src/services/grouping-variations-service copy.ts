export default function groupingVariationsService(
  words: IWord[],
  genderMatchWords: IWord[],
  numberMatchWords: IWord[]
) {
  const startTime = performance.now();

  let matchedCount = 0;
  let notMatchedCount = 0;

  const matchedPositions: number[] = [];
  const notMatchedPositions: number[] = [];

  const groupedWords: IWord[] = words.map((wordObj, index) => {
    const variations: Set<string> = new Set();

    let foundVariation = false;

    genderMatchWords.forEach((genderWord) => {
      const genderPrefixLength = genderWord.details.prefix.length;
      const genderSuffixLength = genderWord.details.suffix.length;

      const wordPrefix = wordObj.word.slice(0, genderPrefixLength);
      const wordSuffix = wordObj.word.slice(-genderSuffixLength);

      if (wordPrefix === genderWord.details.prefix && wordSuffix === genderWord.details.suffix) {
        variations.add(genderWord.details.prefix);
        foundVariation = true;
      }
    });

    numberMatchWords.forEach((numberWord) => {
      const numberPrefixLength = numberWord.details.prefix.length;
      const numberSuffixLength = numberWord.details.suffix.length;

      const wordPrefix = wordObj.word.slice(0, numberPrefixLength);
      const wordSuffix = wordObj.word.slice(-numberSuffixLength);

      if (wordPrefix === numberWord.details.prefix && wordSuffix === numberWord.details.suffix) {
        variations.add(numberWord.details.prefix);
        foundVariation = true;
      }
    });

    if (foundVariation) {
      matchedCount++;
      matchedPositions.push(index);
    } else {
      notMatchedCount++;
      notMatchedPositions.push(index);
    }

    return {
      ...wordObj,
      details: {
        ...wordObj.details,
        variations: Array.from(variations),
      },
    };
  });

  const totalWords = words.length;

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  return {
    groupedWords,
    matchedCount,
    notMatchedCount,
    matchedPositions,
    notMatchedPositions,
    totalWords,
    executionTime,
  };
}
