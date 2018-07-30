import { Component, Input, ViewEncapsulation } from '@angular/core';

import { IItem } from '../../../../types/item';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'card card--interactive' },
})
export class ContentItemComponent {
  @Input() public item: IItem;
}
