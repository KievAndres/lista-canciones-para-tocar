import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ControlsComponent } from './components/controls/controls.component';
import { PlayerModule } from './components/player/player.module';

@NgModule({
  declarations: [AppComponent, ListComponent, ControlsComponent],
  imports: [BrowserModule, PlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
