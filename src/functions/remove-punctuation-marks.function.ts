import { PUNCTUATION_MARKS } from '../constants/song-identifier.constant';
export function removePunctuationMarks(text: string): string {
  return text.replace(PUNCTUATION_MARKS, '');
}