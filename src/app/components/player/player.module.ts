import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { CommonModule } from '@angular/common';
import { PlayerDefaultViewComponent } from './player-default-view/player-default-view.component';
import { PlayerLyricViewComponent } from './player-lyric-view/player-lyric-view.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerDefaultViewComponent,
    PlayerLyricViewComponent,
  ],
  imports: [CommonModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
