import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PlayerView } from 'src/enum/player-view.enum';
import { Song } from 'src/interfaces/song.interface';

@Component({
  selector: 'player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss'],
})
export class PlayerComponent {
  @Input() public songList: Song[] = [];
  @Input() public enableBlinkNextSong: boolean = false;

  @Output() public goToSong = new EventEmitter<Song>();

  public previousSong?: Song;
  public currentSong?: Song;
  public nextSong?: Song;
  public currentPlayerView: PlayerView;

  public readonly playerView = PlayerView;

  constructor() {
    this.currentPlayerView = PlayerView.DEFAULT;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.songList?.currentValue) {
      const newSongList: Song[] = changes.songList.currentValue;
      const currentSongIndex = newSongList
        .map((song) => song.isCurrentlyPlaying)
        .indexOf(true);
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

  public togglePlayerView(): void {
    switch (this.currentPlayerView) {
      case PlayerView.DEFAULT:
        this.currentPlayerView = PlayerView.LYRIC;
        break;
      case PlayerView.LYRIC:
        this.currentPlayerView = PlayerView.DEFAULT;
        break;
    }
  }
}
