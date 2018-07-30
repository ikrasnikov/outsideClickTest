import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class OutsideClickService {

  public documentClick$: Observable<Event>;

  public constructor() {
    this.documentClick$ = Observable.fromEvent(document, 'click');
  }

}
