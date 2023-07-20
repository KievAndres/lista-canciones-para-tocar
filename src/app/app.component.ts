import { Component } from '@angular/core';
import { testPasteText } from './test';
import { getListaCanciones } from 'src/functions/getListaCanciones';
import { Cancion } from 'src/interfaces/cancion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    // this.pastedText = testPasteText;
    this.identifiedSongList = [];
    this.songList = getListaCanciones();
    // this._identifySongList();
  }

  public async onPaste(): Promise<void> {
    this.pastedText = await navigator.clipboard.readText();
    this.pastedText = this.pastedText.replace(/\n/g, '');
    this._identifySongList();
  }

  private _identifySongList(): void {
    const listaPalabras = this.pastedText.split(' ');
    for (let startPointer = 0; startPointer < listaPalabras.length - 1; startPointer++) {
      const songListByRythm = this.songList.filter(song => {
        const rythmList = song.ritmo.map(rythm => rythm.toLowerCase());
        return rythmList.includes(listaPalabras[startPointer].toLowerCase())
      });
      if (songListByRythm.length > 0) {
        songListByRythm.forEach(song => {
          song.nombre.forEach(songName => {
            const songNameArray = songName.split(' ');
            let pastedTextSubstringArray = this.pastedText.split(' ');
            pastedTextSubstringArray.splice(0, startPointer + 1);
            // const pastedTextSubstring = this.pastedText.substring(startPointer + 1);
            let cumulativeIndex = 0;
            for (let i = 0; i < songNameArray.length; i++) {
              if (songNameArray[i].toLowerCase() === pastedTextSubstringArray[i].toLowerCase()) {
                cumulativeIndex++;
              }
            }
            if (cumulativeIndex === songNameArray.length) {
              this.identifiedSongList.push(song)
            }
          })
        });
      }
    }
  }
}
