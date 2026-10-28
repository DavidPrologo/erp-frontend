import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'rh',
    // Carrega o módulo de RH inteirinho sob demanda (Lazy Loading)
    loadChildren: () => 
      import('./modules/rh/rh.routes').then(m => m.RH_ROUTES)
  },
  {
    path: '',
    redirectTo: 'rh',
    pathMatch: 'full'
  }
];