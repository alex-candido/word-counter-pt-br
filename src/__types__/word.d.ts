interface IWord {
  id: string,
  word: string,
  position: number,
  frequency: number,
  details: {
    prefix: string,
    suffix: string,
    variations: string[]
    synonyms: string[]
  }
}

