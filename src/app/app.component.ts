import { Component } from '@angular/core';
import { testPasteText } from './test';
import { getListaCanciones } from 'src/functions/getListaCanciones';
import { Song } from 'src/interfaces/cancion.interface';
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
  public identifiedSongList: Song[];
  public songList: Song[];
  public selectedSong: number;
  
  private readonly _timeInterval: number = 1000 * 60 * 6.5;

  constructor() {
    this.titleList = 'Músicas para hoy';
    this.pastedText = '';
    // this.pastedText = testPasteText;
    const identifiedSongListLocalStorage = JSON.parse(localStorage.getItem('identifiedSongList') ?? '""');
    const selectedSongLocalStorage = JSON.parse(localStorage.getItem('selectedSong') ?? '0');
    this.identifiedSongList = [];
    this.selectedSong = 0;
    this.songList = getListaCanciones();
    if (selectedSongLocalStorage) {
      this.selectedSong = selectedSongLocalStorage;
      this._goToSelectedSong();
    }
    if (identifiedSongListLocalStorage) {
      this.identifiedSongList = identifiedSongListLocalStorage;
      this._animateSelectedSong();
    }
    // this._identifyLineText();
  }

  public async onPaste(): Promise<void> {
    this.pastedText = await navigator.clipboard.readText();
    this.identifiedSongList = [];
    this.selectedSong = 0;
    this._identifyLineText();
    if (this.identifiedSongList.length > 0) {
      localStorage.setItem('identifiedSongList', JSON.stringify(this.identifiedSongList));
      localStorage.setItem('selectedSong', JSON.stringify(this.selectedSong));
      this._animateSelectedSong();
    }
  }

  private _identifyLineText(): void {
    const lineTextList = this.pastedText.split('\n');
    lineTextList.forEach((lineText, index) => {
      if (index > 0) {
        this._identifySongList(lineText);
      } else {
        // Possible title
        const cleanedLineText = this._removeSpecialCharacters(lineText);
        if (!titleList.includes(cleanedLineText)) {
          this._identifySongList(cleanedLineText);
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
        rythm = this._removeSpecialCharacters(possibleRythmWordList.join(' '));
        songName = this._removeSpecialCharacters(possibleSongNameList.join(' '));
        const songRythmList = song.rythm.map(item => this._removeSpecialCharacters(item));
        const songNameList = song.name.map(item => this._removeSpecialCharacters(item));
        if (songRythmList.includes(rythm) && songNameList.includes(songName)) {
          this.identifiedSongList.push(song);
          break;
        }
        possibleSongNameList.unshift(possibleRythmWordList.pop() ?? '');
      }
    });
  }

  private _removeSpecialCharacters(text: string): string {
    let cleanText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleanText = cleanText.toLowerCase();
    cleanText = cleanText.trim();
    return cleanText;
  }

  private _animateSelectedSong(): void {
    setInterval(() => {
      if (this.selectedSong < this.identifiedSongList.length) {
        this.selectedSong++;
        localStorage.setItem('selectedSong', JSON.stringify(this.selectedSong));
        this._goToSelectedSong();
      }
    }, this._timeInterval);
  }

  private _goToSelectedSong(): void {
    document.getElementById(`song-item-${this.selectedSong}`)?.scrollIntoView();
  }
}
