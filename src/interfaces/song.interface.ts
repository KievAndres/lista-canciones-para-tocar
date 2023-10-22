import { SongTheme } from "./song-theme.interface";

export interface Song {
  id: string;
  name: string [],
  rythm: string[],
  theme?: SongTheme,
  isCurrentlyPlaying: boolean;
}