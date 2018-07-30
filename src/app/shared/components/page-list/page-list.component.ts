import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'lms-page-list',
  templateUrl: './page-list.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-content-page'
  }
})
export class PageListComponent  { }
