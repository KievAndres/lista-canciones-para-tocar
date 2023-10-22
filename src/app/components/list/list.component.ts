import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NUEVA_ALABANZA } from 'src/constants/song-identifier.constant';
import { Song } from 'src/interfaces/song.interface';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() public songList: Song[] = [];

  @Output() public goToSong = new EventEmitter<Song>();

  public readonly NUEVA_ALABANZA = NUEVA_ALABANZA;

  public emitGoToSong(newSong: Song): void {
    this.goToSong.emit(newSong);
  }

  public isNewSong(song: Song): boolean {
    const currentDate = new Date();
    const songDate = song.date;
    return currentDate.getTime() - songDate.getTime() < 2629800000;
  }
}
