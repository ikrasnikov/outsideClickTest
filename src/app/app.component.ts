import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public manyDropDowns = [];
  public serviceDropDownIsShown = false;
  public directiveDropDownIsShown = false;

  constructor () {
    for (let i = 0; i < 300; i++) {
      this.manyDropDowns.push('item' + i);
    }
  }

  public showServiceDropDown() {
    this.serviceDropDownIsShown = !this.serviceDropDownIsShown;
    this.directiveDropDownIsShown = false;
  }

  public showDirectiveDropDown() {
    this.directiveDropDownIsShown = !this.directiveDropDownIsShown;
    this.serviceDropDownIsShown = false;
  }
}
