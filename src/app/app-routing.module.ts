import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin-formulario',
    loadChildren: () => import('./admin-formulario/admin-formulario.module').then( m => m.AdminFormularioPageModule)
  },
  {
    path: 'admin-respuestas',
    loadChildren: () => import('./admin-respuestas/admin-respuestas.module').then( m => m.AdminRespuestasPageModule)
  },
  {
    path: 'conwaygame',
    loadChildren: () => import('./conwaygame/conwaygame.module').then( m => m.ConwaygamePageModule)
  },
  {
    path: 'simple-algorithms',
    loadChildren: () => import('./simple-algorithms/simple-algorithms.module').then( m => m.SimpleAlgorithmsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
