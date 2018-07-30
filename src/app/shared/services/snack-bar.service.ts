import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { SnackBarContentComponent } from '../components/snack-bar-content/snack-bar-error.component';


@Injectable()
export class SnackBarService {

  private readonly _DURATION: number = 10000;

  public constructor(
    private _snackBar: MatSnackBar,
  ) {}

  public showMessage(
    textTranslateKey: string,
    translateParams: { [key: string]: string | number } = {},
  ): void {

    this._snackBar.openFromComponent(
      SnackBarContentComponent,
      {
        extraClasses: 'mat-snack-bar-container--message',
        duration: this._DURATION,
        data: {textTranslateKey, translateParams, isError: false},
      }
    );
  }

  public showError(
    textTranslateKey: string = '',
    translateParams: { [key: string]: string | number } = {},
  ): void {
    this._snackBar.openFromComponent(
      SnackBarContentComponent,
      {
        extraClasses: 'mat-snack-bar-container--error',
        duration: this._DURATION,
        data: {textTranslateKey, translateParams, isError: true},
      }
    );
  }

  public showActionMessage$(
    messageKey: string,
    actionLabelKey: string,
    isErrorState: boolean = false
  ): Observable<void> {
     return Observable.combineLatest(
       Observable.of(messageKey),
       Observable.of(actionLabelKey),
       (message: string, actionLabel: string) => ({message, actionLabel})
     )
       .switchMap((translations: {message: string, actionLabel: string}) => {
          return this._snackBar.open(
            translations.message,
            translations.actionLabel,
            {
              extraClasses: isErrorState ? 'mat-snack-bar-container--error' : 'mat-snack-bar-container--message',
              duration: this._DURATION,
            }
          )
            .onAction();
       });
  }
}
