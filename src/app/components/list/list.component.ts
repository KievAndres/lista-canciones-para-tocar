import { Component, Input } from '@angular/core';
import { NUEVA_ALABANZA } from 'src/constants/song-identifier.constant';
import { Song } from 'src/interfaces/song.interface';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() public selectedSong: number = 0;
  @Input() public identifiedSongList: Song[] = [];

  public readonly NUEVA_ALABANZA = NUEVA_ALABANZA;
}
