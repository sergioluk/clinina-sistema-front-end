import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/features/pdv/pdv').then((m) => m.Pdv),
  },
  {
    path: 'clientes',
    loadComponent: () =>
      import('../app/features/pdv/pdv').then((m) => m.Pdv),
  },
  {
    path: 'pets',
    loadComponent: () =>
      import('../app/features/pdv/pdv').then((m) => m.Pdv),
  },
  {
    path: 'consultas',
    loadComponent: () =>
      import('../app/features/pdv/pdv').then((m) => m.Pdv),
  },
  {
    path: 'financeiro',
    loadComponent: () =>
      import('../app/features/pdv/pdv').then((m) => m.Pdv),
  },
  {
    path: 'produtos-servicos',
    loadComponent: () =>
      import('./features/estoque-servicos/pages/produtos-servicos/produtos-servicos').then((m) => m.ProdutosServicos),
  },
];
