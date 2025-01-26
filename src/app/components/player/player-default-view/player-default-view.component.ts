import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../../../../interfaces/song.interface';
import { isNewSong } from 'src/functions/is-new-song.function';

@Component({
  selector: 'player-default-view',
  templateUrl: 'player-default-view.component.html',
  styleUrls: ['player-default-view.component.scss'],
})
export class PlayerDefaultViewComponent {
  @Input() public previousSong?: Song;
  @Input() public currentSong?: Song;
  @Input() public nextSong?: Song;
  @Input() public enableBlinkNextSong: boolean = false;
  
  @Output() public goToSong = new EventEmitter<Song>();

  public readonly isNewSong = isNewSong;

  public emitGoToSong(newSong: Song): void {
    this.goToSong.emit(newSong);
  }
}
