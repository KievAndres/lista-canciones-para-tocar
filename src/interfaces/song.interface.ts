import { SongTheme } from "./song-theme.interface";

export interface Song {
  name: string [],
  rythm: string[],
  theme?: SongTheme,
}