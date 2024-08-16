import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/input',
  },
  {
    path: '',
    loadChildren: async () => (await import('./pages/input-output/input-output.routes')).INPUT_OUTPUT_ROUTES,
  },
];
