import uniqBy from 'lodash/uniqBy';

// Serviço para calcular a frequência de palavras
export default function wordsFrequencyService(groupedWords: IWord[]) {
  const startTime = performance.now(); // Marca o início do tempo de execução

  const uniqueWords = uniqBy(groupedWords, 'word');

  let matchedCount = 0; // Contador de palavras encontradas
  let notMatchedCount = 0; // Contador de palavras não encontradas

  const wordsWithFrequency: IWord[] = uniqueWords.map((wordObj, index) => {
    let frequency: number = 0;

    groupedWords.forEach((word, index) => {
      const wordPrefixLength = word.details.prefix.length;
      const wordSuffixLength = word.details.suffix.length;

      const wordPrefix = wordObj.word.slice(0, wordPrefixLength);
      const wordSuffix = wordObj.word.slice(-wordSuffixLength);

      // Incrementa a frequência se a palavra coincidir ou se o prefixo coincidir
      if (wordObj.word === word.word) {
        frequency++;
        matchedCount++;
      } else if (
        wordPrefixLength > 0 &&
        word.details.prefix &&
        wordPrefix === word.details.prefix
      ) {
        frequency++;
        matchedCount++;
      } else {
        notMatchedCount++;
      }
    });

    return {
      ...wordObj,
      frequency,
      details: {
        ...wordObj.details,
      },
    };
  });

  const endTime = performance.now(); // Marca o fim do tempo de execução
  const executionTime = endTime - startTime; // Calcula o tempo de execução

  return {
    wordsWithFrequency,
    matchedCount,
    notMatchedCount,
    executionTime,
  };
}
