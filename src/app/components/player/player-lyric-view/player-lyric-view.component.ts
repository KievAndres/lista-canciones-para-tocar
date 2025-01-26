import { Component, Input } from "@angular/core";
import { Song } from "src/interfaces/song.interface";

@Component({
  selector: 'player-lyric-view',
  templateUrl: './player-lyric-view.component.html',
  styleUrls: ['./player-lyric-view.component.scss']
})
export class PlayerLyricViewComponent {
  @Input() public set currentSong(song: Song | undefined) {
    if (song?.lyric) {
      const newLyric: string = song?.lyric;
      this._buildLyricBlocks(newLyric);
    }
  }

  public lyricBlocks: string[];

  constructor() {
    this.lyricBlocks = [];
  }

  private _buildLyricBlocks(lyric: string): void {
    this.lyricBlocks = lyric.split('\n');
  }
}