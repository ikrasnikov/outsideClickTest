import { Component, QueryList, ViewChildren } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public manyDropDowns = [];
  public serviceDropDownIsShown = false;
  public directiveDropDownIsShown = false;
  public eventListenerDropDownIsShown = false;
  public dropDownsQuantity$$: Subject<number>;
  public dropDownsQuantity = 1;


  constructor () {
    this.dropDownsQuantity$$ = new Subject();

    this.dropDownsQuantity$$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((quantity) => {
      this._renderDropDowns(quantity);
    });

    this._renderDropDowns(this.dropDownsQuantity);
  }

  public showServiceDropDown() {
    this.serviceDropDownIsShown = !this.serviceDropDownIsShown;
    this.directiveDropDownIsShown = false;
    this.eventListenerDropDownIsShown = false;
  }

  public showDirectiveDropDown() {
    this.directiveDropDownIsShown = !this.directiveDropDownIsShown;
    this.serviceDropDownIsShown = false;
    this.eventListenerDropDownIsShown = false;
  }

  public showEventListenerDropDown() {
    this.eventListenerDropDownIsShown = !this.eventListenerDropDownIsShown;
    this.serviceDropDownIsShown = false;
    this.directiveDropDownIsShown = false;
  }

  public updateDropDownsQuantity (value) {
    this.dropDownsQuantity = value;
    this.dropDownsQuantity$$.next(value);
  }


  private _renderDropDowns(quantity) {
    this.manyDropDowns = [];

    for (let i = 0; i < quantity; i++) {
      this.manyDropDowns.push('item' + i);
    }
  }
}
