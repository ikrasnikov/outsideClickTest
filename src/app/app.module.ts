import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClickOutsideDirective } from 'angular2-click-outside/clickOutside.directive'

import { AppComponent } from './app.component';
import { DropDownServiceComponent } from './drop-down-servece/drop-down-service.component';
import { OutsideClickService } from './outside-click.service';
import { DropDownDirectiveComponent } from './drop-down-directive/drop-down-directive.component';
import { DropDownEventListenerComponent } from './drop-down-event-listener/drop-down-event-listener';

@NgModule({
  declarations: [
    AppComponent,
    DropDownServiceComponent,
    DropDownDirectiveComponent,
    ClickOutsideDirective,
    DropDownEventListenerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    OutsideClickService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
