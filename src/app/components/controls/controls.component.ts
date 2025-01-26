import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerListView } from '../../../enum/player-list.enum';
import { PlayerStatus } from '../../../enum/player-status.enum';

@Component({
  selector: 'controls',
  templateUrl: 'controls.component.html',
  styleUrls: ['controls.component.scss'],
})
export class ControlsComponent {
  @Output() togglePlayerListView = new EventEmitter<PlayerListView>();
  @Output() pasteEvent = new EventEmitter();
  @Output() playerStatus = new EventEmitter<PlayerStatus>()
  @Output() enableLyricMode = new EventEmitter<boolean>();

  public playerStatusEnum: typeof PlayerStatus;
  public currentPlayerStatus: PlayerStatus;
  public playerListView: typeof PlayerListView;
  public currentPlayerListView: PlayerListView;
  public isEnabledLyricMode: boolean;

  constructor() {
    this.playerStatusEnum = PlayerStatus;
    this.currentPlayerStatus = PlayerStatus.STOP;
    this.playerListView = PlayerListView;
    this.currentPlayerListView = PlayerListView.PLAYER_VIEW;
    this.isEnabledLyricMode = false;
  }

  public changeIsPlaying(newPlayerStatus: PlayerStatus): void {
    this.currentPlayerStatus = newPlayerStatus;
    this.playerStatus.emit(newPlayerStatus);
  }

  public emitTogglePlayerListView(newPlayerListView: PlayerListView): void {
    this.currentPlayerListView = newPlayerListView;
    this.togglePlayerListView.emit(newPlayerListView);
  }

  public emitToggleLyricMode(newValue: boolean): void {
    this.isEnabledLyricMode = newValue;
    this.enableLyricMode.emit(newValue);
  }

  public emitPasteEvent(): void {
    this.pasteEvent.emit();
  }
}
