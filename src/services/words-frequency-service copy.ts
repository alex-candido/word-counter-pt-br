export default function wordsFrequencyService(
  words: IWord[],
  groupedWords: IWord[],
) {
  const startTime = performance.now();

  let matchedCount = 0;
  let notMatchedCount = 0;

  const frequencyMap: { [key: string]: { count: number; wordObj: IWord } } = {};

  groupedWords.forEach(groupedWord => {
    const word = groupedWord.word;

    if (frequencyMap[word]) {
      frequencyMap[word].count++;
    } else {
      frequencyMap[word] = {
        count: 1,
        wordObj: groupedWord,
      };
    }
  });

  const uniqueWords = Object.values(frequencyMap).map(({ count, wordObj }) => ({
    ...wordObj,
    frequency: count,
    details: {
      ...wordObj.details,
    },
  }));

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  return {
    uniqueWords,
  };
}
