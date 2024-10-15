export default function identifyGenderService(text: string, words: IWord[]) {
  const startTime = performance.now();

  const regexp =
    /\b([A-Za-záàâãéèêíÍïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+)(a|o|or|ra|eiro|eira)\b/gi;

  const wordsGender: { word: string; prefix: string; suffix: string }[] =
    Array.from(text.matchAll(regexp)).map((match) => ({
      word: match[0].toLowerCase(),
      prefix: match[1].toLowerCase(),
      suffix: match[2].toLowerCase(),
    }));

  let genderFoundCount: number = 0;
  let genderNotFoundCount: number = 0;

  const genderFoundPositions: number[] = [];
  const genderNotFoundPositions: number[] = [];
  const genderNotFoundWords: IWord[] = [];

  const GenderMatchWords: IWord[] = words
    .map((wordObj, index) => {
      const match = wordsGender.find(
        (wg) => wg.word === wordObj.word.toLowerCase(),
      );

      if (match) {
        genderFoundCount++;
        genderFoundPositions.push(index);
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
        genderNotFoundCount++;
        genderNotFoundPositions.push(index);
        genderNotFoundWords.push({
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

  const genderTotalPositions = genderFoundPositions.length + genderNotFoundPositions.length;

  const endTime = performance.now();
  const genderExecutionTime = endTime - startTime;

  return {
    GenderMatchWords,
    genderFoundCount,
    genderNotFoundCount,
    genderFoundPositions,
    genderNotFoundPositions,
    genderNotFoundWords,
    genderTotalPositions,
    genderExecutionTime,
  };
}
