import { Routes } from '@angular/router';

import { DropDownServiceComponent } from './drop-down-service/drop-down-service.component';
import { DropDownEventListenerComponent } from './drop-down-event-listener/drop-down-event-listener';
import { DropDownDirectiveComponent } from './drop-down-directive/drop-down-directive.component';


export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'service',
        component: DropDownServiceComponent,
      },
      {
        path: 'event-listener',
        component: DropDownEventListenerComponent,
      },
      {
        path: 'directive',
        component: DropDownDirectiveComponent,
      },
    ]
  },
];
