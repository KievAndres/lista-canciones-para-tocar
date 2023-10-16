import { Component } from '@angular/core';

@Component({
  selector: 'controls',
  templateUrl: 'controls.component.html',
  styleUrls: ['controls.component.scss'],
})
export class ControlsComponent {
  public isPlaying: boolean;

  constructor() {
    this.isPlaying = false;
  }

  public changeIsPlaying(newIsPlaying: boolean): void {
    this.isPlaying = newIsPlaying;
  }
}
