import { Route } from '@angular/router';

import { InputPageComponent } from './input/input.component';
import { OutputPageComponent } from './output/output.component';

export const INPUT_OUTPUT_ROUTES: Route[] = [
  {
    path: 'input',
    component: InputPageComponent,
  },
  {
    path: 'output/:value',
    component: OutputPageComponent,
  }
];
