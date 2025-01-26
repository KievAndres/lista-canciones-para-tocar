import { Component, Input } from "@angular/core";
import { Song } from "src/interfaces/song.interface";

@Component({
  selector: 'player-lyric-view',
  templateUrl: './player-lyric-view.component.html',
  styleUrls: ['./player-lyric-view.component.scss']
})
export class PlayerLyricViewComponent {
  @Input() public currentSong?: Song;
}