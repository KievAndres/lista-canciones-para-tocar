import { Song } from '../interfaces/song.interface';
export function isNewSong(song?: Song): boolean {
  if (!song) {
    return false;
  }
  const currentDate = new Date();
  const songDate = song.date;
  return currentDate.getTime() - songDate.getTime() < 2629800000;
}
