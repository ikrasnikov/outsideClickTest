import { Component, ElementRef, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { BaseComponent } from '../shared/helpers/base-component';
import { OutsideClickService } from '../shared/services/outside-click.service';
import { TestPageService } from '../shared/services/test-page.service';

import { IItem } from '../../types/item';

@Component({
  selector: 'app-drop-down-service',
  templateUrl: './drop-down-service.component.html',
})
export class DropDownServiceComponent extends BaseComponent {

  public isShown: boolean;
  public items: IItem[];


  @ViewChild('toggle')
  public toggle: ElementRef;

  public documentClickSubscription: Subscription;


  public constructor(
    private _outsideClickService: OutsideClickService,
    private _testPageService: TestPageService,
  ) {
    super();

    this._testPageService.items$
      .takeUntil(this._destroy$$)
      .subscribe((items: IItem[]) => {
        this.items = items;
      });
  }

  public toggleMenu(): void {
    if (this.isShown) {
      this._hideMenu();

      return;
    }
    this._showMenu();
  }

  private _showMenu(): void {
    this.isShown = true;
    this._setOutsideClickHandler();
  }

  private _hideMenu(): void {
    this.isShown = false;
    this.documentClickSubscription.unsubscribe();
  }

  private _setOutsideClickHandler(): void {
    this.documentClickSubscription = this._outsideClickService.documentClick$
      .subscribe((event: Event) => {
        if (this.toggle && this.toggle.nativeElement.contains(event.target)) {
          return;
        }

        this._hideMenu();
      });
  }
}
