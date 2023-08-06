import { Component } from '@angular/core';
import { testPasteText } from './test';
import { getListaCanciones } from 'src/functions/getListaCanciones';
import { Cancion } from 'src/interfaces/cancion.interface';
import { titleList } from '../constants/title.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lista-canciones-para-tocar';

  public pastedText: string;
  public titleList: string;
  public identifiedSongList: Cancion[];
  public songList: Cancion[];

  constructor() {
    this.titleList = 'Músicas para hoy';
    this.pastedText = '';
    this.pastedText = testPasteText;
    this.identifiedSongList = [];
    this.songList = getListaCanciones();
    this._identifyLineText();
  }

  public async onPaste(): Promise<void> {
    this.pastedText = await navigator.clipboard.readText();
    this.identifiedSongList = [];
    this._identifyLineText();
  }

  private _identifyLineText(): void {
    const lineTextList = this.pastedText.split('\n');
    lineTextList.forEach((lineText, index) => {
      if (index > 0) {
        this._identifySongList(lineText);
      } else {
        // Possible title
        if (!titleList.includes(lineText)) {
          this._identifySongList(lineText);
        }
      }
    });
  }

  private _identifySongList(lineText: string): void {
    let rythm, songName;
    this.songList.forEach((song) => {
      const possibleRythmWordList = lineText.split(' ');
      const possibleSongNameList: string[] = [];
      while (possibleRythmWordList.length > 0) {
        rythm = this._cleanText(possibleRythmWordList.join(' '));
        songName = this._cleanText(possibleSongNameList.join(' '));
        const songRythmList = song.ritmo.map(item => this._cleanText(item));
        const songNameList = song.nombre.map(item => this._cleanText(item));
        if (songRythmList.includes(rythm) && songNameList.includes(songName)) {
          this.identifiedSongList.push(song);
          break;
        }
        possibleSongNameList.unshift(possibleRythmWordList.pop() ?? '');
      }
    });
  }

  private _cleanText(text: string): string {
    let cleanText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleanText = cleanText.toLowerCase();
    cleanText = cleanText.trim();
    return cleanText;
  } 
}
