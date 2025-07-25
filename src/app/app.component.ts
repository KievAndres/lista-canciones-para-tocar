import { Component } from '@angular/core';
import { getSongList } from 'src/functions/get-song-list';
import {
  titleList,
} from 'src/constants/song-identifier.constant';
import { removeSpecialCharacters } from '../functions/remove-special-characters.function';
import { removePunctuationMarks } from '../functions/remove-punctuation-marks.function';
import { Song } from 'src/interfaces/song.interface';
import { getCurrentSongTheme } from '../functions/get-current-song-theme';
import { PlayerListView } from '../enum/player-list.enum';
import { PlayerStatus } from '../enum/player-status.enum';
import { PLAYLIST_20250723 } from 'src/playlists/playlist-20250723.constant';

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
  public currentPlayingSongIndex: number;
  public playerListView: typeof PlayerListView;
  public currentPlayerListView: PlayerListView;
  public playerEnableBlinkNextSong: boolean;
  public isEnabledLyricMode: boolean;

  private _animationSongListInterval?: any;
  private _elapsedTime: number;

  private readonly _songDuration: number = 1000 * 60 * 6.5; // 6.5 minutes
  private readonly _firstSongDelay: number = 2000 * 60; // 2 minutes
  private readonly _timeToStartBlink: number = 0.5; // Half song

  constructor() {
    this.isEnabledLyricMode = false;
    this.titleList = 'Músicas para hoy';
    this.pastedText = '';
    // this.pastedText = testPasteText;
    // const identifiedSongListLocalStorage = JSON.parse(
    //   localStorage.getItem('identifiedSongList') ?? '""'
    // );
    // const selectedSongLocalStorage = JSON.parse(
    //   localStorage.getItem('selectedSong') ?? '0'
    // );
    this.currentPlayingSongIndex = 0;
    this.identifiedSongList = [];
    this.songList = getSongList();
    // if (selectedSongLocalStorage) {
    //   this.selectedSong = selectedSongLocalStorage;
    //   this._goToSelectedSong();
    // }
    // if (identifiedSongListLocalStorage) {
    //   this.identifiedSongList = identifiedSongListLocalStorage;
    // }
    // this._buildSongList();
    this._buildSongListBasedOnSavedSongIdList(PLAYLIST_20250723);
    this.playerListView = PlayerListView;
    this.currentPlayerListView = PlayerListView.PLAYER_VIEW;
    this._elapsedTime = 0;
    this.playerEnableBlinkNextSong = false;
  }

  public async onPaste(): Promise<void> {
    this.pastedText = await navigator.clipboard.readText();
    this.identifiedSongList = [];
    this._buildSongList();
  }

  public togglePlayerListView(newPlayerListView: PlayerListView): void {
    this.currentPlayerListView = newPlayerListView;
  }

  private _buildSongList(): void {
    const lineTextList = this.pastedText.split('\n');
    lineTextList.forEach((lineText, index) => {
      if (index > 0) {
        this._identifySongList(lineText);
      } else {
        // Possible title
        const cleanedLineText = this._cleanText(lineText);
        const cleanedTitleList: string[] = titleList.map((title) =>
          this._cleanText(title)
        );
        if (!cleanedTitleList.includes(cleanedLineText)) {
          this._identifySongList(cleanedLineText);
        }
      }
    });
    // TODO remove
  }

  public goToSong(newSong: Song): void {
    this.identifiedSongList = this.identifiedSongList.map((song, index) => {
      if (song.id === newSong.id) {
        song.isCurrentlyPlaying = true;
        this.currentPlayingSongIndex = index;
        this._elapsedTime = 0;
        this.playerEnableBlinkNextSong = false;
      } else {
        song.isCurrentlyPlaying = false;
      }
      return song;
    });
  }

  public changePlayerStatus(newPlayerStatus: PlayerStatus): void {
    switch (newPlayerStatus) {
      case PlayerStatus.PLAY:
        this._startPlayer();
        break;
      case PlayerStatus.STOP:
        this._stopPlayer();
        break;
    }
  }

  public toggleIsEnabledLyricMode(newValue: boolean): void {
    this.isEnabledLyricMode = newValue;
  }

  private _identifySongList(lineText: string): void {
    if (!this._isValidSong(lineText)) {
      return;
    }
    let rythm, songName;
    let isIdentifiedSong = false;
    for (let i = 0; i < this.songList.length; i++) {
      let song = this.songList[i];
      const possibleRythmWordList = lineText.split(' ');
      const possibleSongNameList: string[] = [];
      while (possibleRythmWordList.length > 0) {
        rythm = this._cleanText(possibleRythmWordList.join(' '));
        songName = this._cleanText(possibleSongNameList.join(' '));
        const songRythmList = song.rythm.map((item) => this._cleanText(item));
        const songNameList = song.name.map((item) => this._cleanText(item));
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

    this._buildSongThemes();
    if (this.identifiedSongList[0]) {
      // Select first song
      this.identifiedSongList[0].isCurrentlyPlaying = true;
    }
  }

  private _cleanText(text: string): string {
    let cleanText = removeSpecialCharacters(text);
    cleanText = removePunctuationMarks(cleanText);
    cleanText = cleanText.toLowerCase();
    cleanText = cleanText.trim();
    return cleanText;
  }

  private _startPlayer(): void {
    this._animationSongListInterval = setInterval(() => {
      this._elapsedTime += 10;
      this._checkIfGoToNextSong();
    }, 10);
  }

  private _stopPlayer(): void {
    this._elapsedTime = 0;
    this.playerEnableBlinkNextSong = false;
    clearInterval(this._animationSongListInterval);
  }

  private _checkIfGoToNextSong(): void {
    let songDuration = this._songDuration;
    if (this.currentPlayingSongIndex === 0) {
      // First song
      songDuration += this._firstSongDelay;
    }
    if (this._elapsedTime >= songDuration * this._timeToStartBlink) {
      this.playerEnableBlinkNextSong = true;
    }
    if (this._elapsedTime > songDuration) {
      this._elapsedTime = 0;
      this.playerEnableBlinkNextSong = false;
      this._automaticallyGoToNextSong();
    }
  }

  private _automaticallyGoToNextSong(): void {
    let nextSongIndex = -1;
    this.identifiedSongList = this.identifiedSongList.map((song, index) => {
      if (song.isCurrentlyPlaying) {
        song.isCurrentlyPlaying = false;
        nextSongIndex = index + 1;
      } else if (nextSongIndex === index) {
        song.isCurrentlyPlaying = true;
        this.currentPlayingSongIndex = index;
        this._elapsedTime = 0;
      } else {
        song.isCurrentlyPlaying = false;
      }
      return song;
    });
    if (nextSongIndex >= this.identifiedSongList.length) {
      this._stopPlayer();
    }
  }

  private _getTemporarySong(text: string): Song {
    const temporaryName = text.toLowerCase().split(' ').join('-');
    return {
      id: temporaryName,
      name: [text],
      rythm: [],
      isCurrentlyPlaying: false,
      date: new Date(),
      lyric: '',
    };
  }

  private _isValidSong(text: string): boolean {
    return text.replace(/\n/g, '').trim().length > 0;
  }

  private _buildSongThemes(): void {
    this.identifiedSongList = this.identifiedSongList.map((song, index) => {
      song.theme = getCurrentSongTheme(index);
      return song;
    });
  }

  private _buildSongListBasedOnSavedSongIdList(
    savedSongIdList: string[]
  ): void {
    savedSongIdList.forEach((savedSongId) => {
      const foundSong = this.songList.find((song) => song.id === savedSongId);
      if (foundSong) {
        this.identifiedSongList.push(foundSong);
      }
    });
    if (this.identifiedSongList[0]) {
      // Select first song
      this.identifiedSongList[0].isCurrentlyPlaying = true;
    }
  }
}
