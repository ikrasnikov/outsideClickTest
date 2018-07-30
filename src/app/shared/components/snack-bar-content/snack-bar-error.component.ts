import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'lms-snack-bar-content',
  templateUrl: './snack-bar-content.component.html',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'component-wrapper' },
})
export class SnackBarContentComponent {

  public constructor(
    private _snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA)
    public data: {
      textTranslateKey: string,
      translateParams: { [key: string]: string | number },
      isError: boolean,
    }
  ) {}

  public close(): void {
    this._snackBar.dismiss();
  }
}
