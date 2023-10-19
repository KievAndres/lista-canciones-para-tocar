import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerListView } from '../../../enum/player-list.enum';

@Component({
  selector: 'controls',
  templateUrl: 'controls.component.html',
  styleUrls: ['controls.component.scss'],
})
export class ControlsComponent {
  @Output() togglePlayerListView = new EventEmitter<PlayerListView>();
  @Output() pasteEvent = new EventEmitter();

  public isPlaying: boolean;
  public playerListView: typeof PlayerListView;
  public currentPlayerListView: PlayerListView;

  constructor() {
    this.isPlaying = false;
    this.playerListView = PlayerListView;
    this.currentPlayerListView = PlayerListView.PLAYER_VIEW;
  }

  public changeIsPlaying(newIsPlaying: boolean): void {
    this.isPlaying = newIsPlaying;
  }

  public emitTogglePlayerListView(newPlayerListView: PlayerListView): void {
    this.currentPlayerListView = newPlayerListView;
    this.togglePlayerListView.emit(newPlayerListView);
  }

  public emitPasteEvent(): void {
    this.pasteEvent.emit();
  }
}
