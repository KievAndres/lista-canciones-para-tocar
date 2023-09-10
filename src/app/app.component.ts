import { Component } from '@angular/core';
import { testPasteText } from './test';
import { getListaCanciones } from 'src/functions/getListaCanciones';
import { Song } from 'src/interfaces/cancion.interface';
import { NUEVA_ALABANZA, titleList } from '../constants/title.constant';

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

  public readonly NUEVA_ALABANZA = NUEVA_ALABANZA;
  
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
        const cleanedLineText = this._cleanText(lineText);
        const cleanedTitleList: string[] = titleList.map(title => this._cleanText(title));
        if (!cleanedTitleList.includes(cleanedLineText)) {
          this._identifySongList(cleanedLineText);
        }
      }
    });
  }

  private _identifySongList(lineText: string): void {
    if (!this._isValidSong(lineText)) {
      return;
    }
    let rythm, songName;
    let isIdentifiedSong = false;
    for (let song of this.songList) {
      const possibleRythmWordList = lineText.split(' ');
      const possibleSongNameList: string[] = [];
      while (possibleRythmWordList.length > 0) {
        rythm = this._cleanText(possibleRythmWordList.join(' '));
        songName = this._cleanText(possibleSongNameList.join(' '));
        const songRythmList = song.rythm.map(item => this._cleanText(item));
        const songNameList = song.name.map(item => this._cleanText(item));
        if (songRythmList.includes(rythm) && songNameList.includes(songName)) {
          this.identifiedSongList.push(song);
          isIdentifiedSong = true;
          break;
        }
        possibleSongNameList.unshift(possibleRythmWordList.pop() ?? '');
      }
      if (isIdentifiedSong) {
        break;
      }
    }
    if (!isIdentifiedSong) {
      // Song not identified is added to list anyways
      const temporarySong = this._getTemporarySong(lineText);
      this.identifiedSongList.push(temporarySong);
    }
  }

  private _cleanText(text: string): string {
    let cleanText = this._removeSpecialCharacters(text);
    cleanText = cleanText.toLowerCase();
    cleanText = cleanText.trim();
    return cleanText;
  }

  private _removeSpecialCharacters(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
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

  private _getTemporarySong(text: string): Song {
    return {
      name: [text, NUEVA_ALABANZA],
      rythm: []
    }
  }

  private _isValidSong(text: string): boolean {
    return text.replace(/\n/g, '').trim().length > 0;
  }
}
