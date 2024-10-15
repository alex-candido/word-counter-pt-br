import { v4 as uuidv4 } from 'uuid';

import groupingVariationsService from './grouping-variations-service';
import identifyGenderService from './identify-gender-service';
import identifyNumberService from './identify-number-service';
import identifyWordsService from './identify-words-service';
import wordsFrequencyService from './words-frequency-service';

export default function textProcessingService(text: string) {
  const { words, words_amount } = identifyWordsService(text);

  // Grammatical Classes - Morphology

  // Gender (masculine, feminine)
  const {
    GenderMatchWords,
    genderFoundCount,
    genderNotFoundCount,
    genderFoundPositions,
    genderNotFoundPositions,
    genderNotFoundWords,
    genderTotalPositions,
    genderExecutionTime,
  } = identifyGenderService(text, words);

  console.log({
    GenderMatchWords,
    genderFoundCount,
    genderNotFoundCount,
    genderFoundPositions,
    genderNotFoundPositions,
    genderNotFoundWords,
    genderTotalPositions,
    genderExecutionTime,
  });

  // Number (singular, plural)
  const {
    NumberMatchWords,
    numberFoundCount,
    numberNotFoundCount,
    numberFoundPositions,
    numberNotFoundPositions,
    numberNotFoundWords,
    numberTotalPositions,
    numberExecutionTime,
  } = identifyNumberService(text, words);

  console.log({
    NumberMatchWords,
    numberFoundCount,
    numberNotFoundCount,
    numberFoundPositions,
    numberNotFoundPositions,
    numberNotFoundWords,
    numberTotalPositions,
    numberExecutionTime,
  });

  const {
    groupedWords,
    groupingMatchedCount,
    groupingNotMatchedCount,
    matchedPositions,
    notMatchedPositions,
    totalWords,
    groupingExecutionTime,
  } = groupingVariationsService(words, GenderMatchWords, NumberMatchWords);

  console.log({
    words_amount,
    groupedWords,
    groupingMatchedCount,
    groupingNotMatchedCount,
    matchedPositions,
    notMatchedPositions,
    totalWords,
    groupingExecutionTime,
  });

  const { wordsWithFrequency, matchedCount, notMatchedCount, executionTime } =
    wordsFrequencyService(groupedWords);

  console.log({
    wordsWithFrequency,
    matchedCount,
    notMatchedCount,
    executionTime,
  });

  const document = {
    id: uuidv4(),
    raw_text: text,
    words_amount: words_amount,
    text_result: [{}] as IWord[],
    created_at: new Date(),
  } as IDocument;
  return document;
}
