import { Routes } from '@angular/router';

export const RH_ROUTES: Routes = [
  {
    path: 'colaboradores',
    // Exemplo de Lazy Loading para a fatia interna de colaboradores
    loadChildren: () => 
      import('./colaboradores/colaboradores.routes').then(m => m.COLABORADORES_ROUTES)
  },
  {
    path: '',
    redirectTo: 'colaboradores',
    pathMatch: 'full'
  }
];