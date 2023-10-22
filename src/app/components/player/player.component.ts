import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Song } from '../../../interfaces/song.interface';
import { SongTheme } from 'src/interfaces/song-theme.interface';

@Component({
  selector: 'player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss']
})
export class PlayerComponent implements OnChanges {
  @Input() public songList: Song[] = [];

  public previousSong?: Song;
  public currentSong?: Song;
  public nextSong?: Song;

  public songTheme?: SongTheme;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentSong?.currentValue) {
      const newCurrentSong: Song = changes.currentSong.currentValue;
      this.songTheme = newCurrentSong.theme;
    }
  }
}