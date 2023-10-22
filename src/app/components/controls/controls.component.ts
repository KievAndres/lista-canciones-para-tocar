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

  public playerStatusEnum: typeof PlayerStatus;
  public currentPlayerStatus: PlayerStatus;
  public playerListView: typeof PlayerListView;
  public currentPlayerListView: PlayerListView;

  constructor() {
    this.playerStatusEnum = PlayerStatus;
    this.currentPlayerStatus = PlayerStatus.STOP;
    this.playerListView = PlayerListView;
    this.currentPlayerListView = PlayerListView.PLAYER_VIEW;
  }

  public changeIsPlaying(newPlayerStatus: PlayerStatus): void {
    this.currentPlayerStatus = newPlayerStatus;
    this.playerStatus.emit(newPlayerStatus);
  }

  public emitTogglePlayerListView(newPlayerListView: PlayerListView): void {
    this.currentPlayerListView = newPlayerListView;
    this.togglePlayerListView.emit(newPlayerListView);
  }

  public emitPasteEvent(): void {
    this.pasteEvent.emit();
  }
}
