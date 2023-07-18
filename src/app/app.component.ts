import { Component } from '@angular/core';
import { testPasteText } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-canciones-para-tocar';

  public pastedText: string;
  public titleList: string;

  constructor() {
    this.titleList = 'Músicas para hoy';
    this.pastedText = testPasteText;
    console.log(this._getContentWithoutTitle())
  }

  public async onPaste(): Promise<void> {
    this.pastedText = await navigator.clipboard.readText();
  }

  private _getContentWithoutTitle(): string {
    let newContent = this.pastedText;
    if (newContent.includes(':')) {
      newContent = newContent.split(':')[1];
    }
    return newContent.trim();
  }
}
