import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { CommonModule } from '@angular/common';
import { PlayerDefaultViewComponent } from './player-default-view/player-default-view.component';

@NgModule({
  declarations: [PlayerComponent, PlayerDefaultViewComponent],
  imports: [CommonModule],
  exports: [PlayerComponent]
})
export class PlayerModule {}
