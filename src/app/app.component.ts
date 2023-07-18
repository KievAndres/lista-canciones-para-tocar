import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-canciones-para-tocar';

  public pastedText: string;

  constructor() {
    this.pastedText = '';
  }

  public async onPaste(): Promise<void> {
    this.pastedText = await navigator.clipboard.readText();
  }
}
