import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OutsideClickService} from '../outside-click.service';

@Component({
  selector: 'app-drop-down-service',
  templateUrl: './drop-down-service.component.html',
  styleUrls: ['./drop-down-service.component.css']
})
export class DropDownServiceComponent {

  public isShown;


  @ViewChild('toggle')
  public toggle: ElementRef;

  public documentClickSubscription: Subscription;


  constructor(
    private _outsideClickService: OutsideClickService,
  ) { }

  public toggleContent(): void {
    if (this.isShown) {
      this._hideContent();

      return;
    }
    this._showContent();
  }

  private _showContent(): void {
    this.isShown = true;
    this._setOutsideClickHandler();
  }

  private _hideContent(): void {
    this.isShown = false;
    this.documentClickSubscription.unsubscribe();
  }

  private _setOutsideClickHandler(): void {
    this.documentClickSubscription = this._outsideClickService.documentClick$
      .subscribe((event: Event) => {
        if (this.toggle && this.toggle.nativeElement.contains(event.target)) {
          return;
        }

        this._hideContent();
      });
  }
}
