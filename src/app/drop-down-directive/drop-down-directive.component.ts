import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-directive',
  templateUrl: './drop-down-directive.component.html',
})
export class DropDownDirectiveComponent {

  public isShown: boolean = false;


  public toggleContent(): void {
    if (this.isShown) {
      this.hideContent();

      return;
    }

    this._showContent();
  }


  private _showContent(): void {
    this.isShown = true;
  }

  public hideContent(): void {
    this.isShown = false;
  }
}
