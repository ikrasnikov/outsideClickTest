import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatTooltipModule
} from '@angular/material';

import './shared/rxjs-operators';

import { appRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './drop-down-directive/click-outside.directive';
import { DropDownDirectiveComponent } from './drop-down-directive/drop-down-directive.component';
import { DropDownEventListenerComponent } from './drop-down-event-listener/drop-down-event-listener';
import { DropDownServiceComponent } from './drop-down-service/drop-down-service.component';
import { OutsideClickService } from './shared/services/outside-click.service';
import { PageListComponent } from './shared/components/page-list/page-list.component';
import { PageListHeaderComponent } from './shared/components/page-list-header/page-list-header.component';
import { SnackBarContentComponent } from './shared/components/snack-bar-content/snack-bar-error.component';
import { ContentItemComponent } from './shared/components/content-item/content-item.component';
import { TestPageService } from './shared/services/test-page.service';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    DropDownServiceComponent,
    DropDownDirectiveComponent,
    DropDownEventListenerComponent,
    PageListComponent,
    PageListHeaderComponent,
    SnackBarContentComponent,
    ContentItemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    OutsideClickService,
    TestPageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
