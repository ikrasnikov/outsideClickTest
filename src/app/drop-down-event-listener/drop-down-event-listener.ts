import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drop-down-event-listener',
  templateUrl: './drop-down-event-listener.html',
})
export class DropDownEventListenerComponent {

  public isShown: boolean = false;


  @ViewChild('toggle')
  private _toggle: ElementRef;

  private _outsideClickListener: () => {};


  public constructor() {}

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

  private _outsideClickHandler(event: Event): void {
    if (this._toggle && this._toggle.nativeElement.contains(event.target)) {
      return;
    }

    this._hideContent();
  }
}
