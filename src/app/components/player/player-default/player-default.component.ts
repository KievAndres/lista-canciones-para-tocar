import { Component, EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { Song } from '../../../../interfaces/song.interface';
import { SongTheme } from 'src/interfaces/song-theme.interface';
import { isNewSong } from '../../../../functions/is-new-song.function';

@Component({
  selector: 'player-default',
  templateUrl: 'player-default.component.html',
  styleUrls: ['player-default.component.scss']
})
export class PlayerDefaultComponent implements OnChanges {
  @Input() public songList: Song[] = [];
  @Input() public enableBlinkNextSong: boolean = false;

  @Output() public goToSong = new EventEmitter<Song>();

  public previousSong?: Song;
  public currentSong?: Song;
  public nextSong?: Song;

  public readonly isNewSong = isNewSong;


  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.songList?.currentValue) {
      const newSongList: Song[] = changes.songList.currentValue;
      const currentSongIndex = newSongList.map(song => song.isCurrentlyPlaying).indexOf(true);
      if (currentSongIndex !== -1) {
        // Current song find
        this.currentSong = newSongList[currentSongIndex];

        // previous song
        const previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex > -1) {
          this.previousSong = newSongList[previousSongIndex];
        } else {
          this.previousSong = undefined;
        }

        // Next song
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex < this.songList.length) {
          this.nextSong = newSongList[nextSongIndex];
        } else {
          this.nextSong = undefined;
        }
      } else {
        this.currentSong = undefined;
        this.previousSong = undefined;
        this.nextSong = undefined;
      }
    }
  }

  public emitGoToSong(newSong: Song): void {
    this.goToSong.emit(newSong);
  }
}