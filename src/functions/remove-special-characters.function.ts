import { SPECIAL_CHARACTERS } from '../constants/song-identifier.constant';
export function removeSpecialCharacters(text: string): string {
  return text.normalize('NFD').replace(SPECIAL_CHARACTERS, '');
}