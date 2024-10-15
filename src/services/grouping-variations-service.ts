export default function groupingVariationsService(
  words: IWord[],
  genderMatchWords: IWord[],
  numberMatchWords: IWord[],
) {
  const startTime = performance.now();

  let groupingMatchedCount = 0;
  let groupingNotMatchedCount = 0;

  const matchedPositions: number[] = [];
  const notMatchedPositions: number[] = [];

  const groupedWords: IWord[] = words.map((wordObj, index) => {
    const variations: string[] = [];
    let prefix = '';
    let suffix = '';
    let foundVariation = false;

    // Verifica as variações de gênero
    genderMatchWords.forEach(genderWord => {
      const genderPrefixLength = genderWord.details.prefix.length;
      const genderSuffixLength = genderWord.details.suffix.length;

      const wordPrefix = wordObj.word.slice(0, genderPrefixLength);
      const wordSuffix = wordObj.word.slice(-genderSuffixLength);

      if (
        wordPrefix.length > 2 &&
        wordPrefix === genderWord.details.prefix &&
        wordSuffix === genderWord.details.suffix
      ) {
        variations.push(genderWord.details.prefix);
        prefix = genderWord.details.prefix;
        suffix = genderWord.details.suffix;
        foundVariation = true;
      }
    });

    // Verifica as variações de número
    numberMatchWords.forEach(numberWord => {
      const numberPrefixLength = numberWord.details.prefix.length;
      const numberSuffixLength = numberWord.details.suffix.length;

      const wordPrefix = wordObj.word.slice(0, numberPrefixLength);
      const wordSuffix = wordObj.word.slice(-numberSuffixLength);

      if (
        wordPrefix.length > 2 &&
        wordPrefix === numberWord.details.prefix &&
        wordSuffix === numberWord.details.suffix
      ) {
        variations.push(numberWord.details.prefix);
        prefix = numberWord.details.prefix;
        suffix = numberWord.details.suffix;
        foundVariation = true;
      }
    });

    if (foundVariation) {
      groupingMatchedCount++;
      matchedPositions.push(index);
    } else {
      groupingNotMatchedCount++;
      notMatchedPositions.push(index);
    }

    // Retorna o objeto com as informações atualizadas
    return {
      ...wordObj,
      details: {
        ...wordObj.details,
        prefix, // Preenche o prefixo correspondente
        suffix, // Preenche o sufixo correspondente
        variations: Array.from(variations), // Lista de variações encontradas
      },
    };
  });

  const totalWords = words.length;

  const endTime = performance.now();
  const groupingExecutionTime = endTime - startTime;

  return {
    groupedWords,
    groupingMatchedCount,
    groupingNotMatchedCount,
    matchedPositions,
    notMatchedPositions,
    totalWords,
    groupingExecutionTime,
  };
}
