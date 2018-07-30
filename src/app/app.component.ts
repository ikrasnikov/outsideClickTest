import { Component, ViewEncapsulation } from '@angular/core';

import { TestPageService } from './shared/services/test-page.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'app' }
})
export class AppComponent {

  public dropDownsQuantity: number = 2;


  public constructor (
    private _testPageService: TestPageService,
  ) {
    this._testPageService.setElementQuantity(this.dropDownsQuantity);
  }

  public updateDropDownsQuantity (value: number): void {
    this.dropDownsQuantity = value;
    this._testPageService.setElementQuantity(value);
  }
}
