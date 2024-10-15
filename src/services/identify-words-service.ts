import { v4 as uuidv4 } from 'uuid';

export default function identifyWordsService(text: string) {
  const regexp = /[A-Za-záàâãéèêíÍïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+/gi;
  const words = text.match(regexp) || [];

  return {
    words_amount: words.length,
    words:
      words
        .filter(word => {
          return word.length;
        })
        .map((word, index) => {
          return {
            id: uuidv4(),
            position: index,
            word: word.toLowerCase(),
            frequency: 0,
            details: {
              prefix: '',
              suffix: '',
              variations: [''],
              synonyms: ['']
            },
          } as IWord;
        }) || [],
  };
}
