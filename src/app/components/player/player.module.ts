import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlayerComponent, PlayerDefaultComponent],
  imports: [CommonModule],
  exports: [PlayerComponent]
})
export class PlayerModule {}
