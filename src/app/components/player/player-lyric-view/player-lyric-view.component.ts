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

  public lyricBlocks: string[][];
  private _lyricLines: string[];

  constructor() {
    this.lyricBlocks = [];
    this._lyricLines = [];
  }

  private _buildLyricBlocks(lyric: string): void {
    this._lyricLines = lyric.split('\n');
    let accumulator: string[] = [];
    this._lyricLines.forEach(lyricLine => {
      if (!lyricLine) {
        if (accumulator.length > 0) {
          this.lyricBlocks.push(accumulator);
          accumulator = [];
        }
      } else {
        accumulator.push(lyricLine);
      }
    })
  }
}