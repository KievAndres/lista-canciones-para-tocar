import { Song } from '../interfaces/song.interface';
export function updateCurrentPlayingSong(
  songList: Song[],
  newSong: Song
): Song[] {
  return songList.map((song) => {
    if (song.id === newSong.id) {
      song.isCurrentlyPlaying = true;
    } else {
      song.isCurrentlyPlaying = false;
    }
    return song;
  });
}
