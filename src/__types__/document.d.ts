interface IDocument {
  id: string;
  raw_text: string;
  words_amount: number;
  text_result: IWord[];
  created_at: DateTime;
}
