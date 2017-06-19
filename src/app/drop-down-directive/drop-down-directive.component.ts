import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-directive',
  templateUrl: './drop-down-directive.component.html',
  styleUrls: ['./drop-down-directive.component.css']
})
export class DropDownDirectiveComponent {

  public isShown = false;


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
