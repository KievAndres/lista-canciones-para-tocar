import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NUEVA_ALABANZA } from 'src/constants/song-identifier.constant';
import { Song } from 'src/interfaces/song.interface';
import { isNewSong } from '../../../functions/is-new-song.function';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() public songList: Song[] = [];

  @Output() public goToSong = new EventEmitter<Song>();

  public readonly NUEVA_ALABANZA = NUEVA_ALABANZA;
  public readonly isNewSong = isNewSong;


  public emitGoToSong(newSong: Song): void {
    this.goToSong.emit(newSong);
  }
}
