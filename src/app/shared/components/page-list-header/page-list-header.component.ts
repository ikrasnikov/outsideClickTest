import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'lms-page-list-header',
  templateUrl: './page-list-header.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-content-page-header'
  }
})
export class PageListHeaderComponent {

  @Input() public deep: boolean = false;
  @Input() public hasSecondLevelHeader: boolean = false;
  @Input() public isSecondLevelHeaderCollapsed: boolean = false;


  public constructor() {}
}
