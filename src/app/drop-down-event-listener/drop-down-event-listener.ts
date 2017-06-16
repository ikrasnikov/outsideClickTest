import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drop-down-event-listener',
  templateUrl: './drop-down-event-listener.html',
  styleUrls: ['./drop-down-event-listener.css']
})
export class DropDownEventListenerComponent {

  public isShown = false;


  @ViewChild('toggle')
  private _toggle: ElementRef;

  private _outsideClickListener;


  constructor() {}

  public toggleContent(): void {
    if (this.isShown) {
      this._hideContent();

      return;
    }

    this._showContent();
  }

  private _showContent(): void {
    this.isShown = true;
    this._outsideClickListener = this._outsideClickHandler.bind(this);
    document.addEventListener('click', this._outsideClickListener);
  }

  private _hideContent(): void {
    this.isShown = false;
    document.removeEventListener('click', this._outsideClickListener);
  }

  private _outsideClickHandler(event) {
    if (this._toggle && this._toggle.nativeElement.contains(event.target)) {
      return;
    }

    this._hideContent();
  }
}
