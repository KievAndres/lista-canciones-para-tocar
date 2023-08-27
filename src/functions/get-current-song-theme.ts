import { SongTheme } from "src/interfaces/song-theme.interface";
import { SONG_THEMES } from "../constants/song-themes.constant";

export function getCurrentSongTheme(index: number): SongTheme {
  return SONG_THEMES[index % SONG_THEMES.length];
}