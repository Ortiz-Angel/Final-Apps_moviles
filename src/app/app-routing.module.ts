import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tarifario-multas',
    loadChildren: () => import('./tarifario-multas/tarifario-multas.module').then(m => m.TarifarioMultasPageModule),
  },
  {
    path: 'consulta-vehiculo',
    loadChildren: () => import('./consulta-vehiculo/consulta-vehiculo.module').then(m => m.ConsultaVehiculoPageModule),
  },
  {
    path: 'consulta-conductor',
    loadChildren: () => import('./consulta-conductor/consulta-conductor.module').then(m => m.ConsultaConductorPageModule),
  },
  {
    path: 'aplicar-multa',
    loadChildren: () => import('./aplicar-multa/aplicar-multa.module').then(m => m.AplicarMultaPageModule),
  },

  { path: 'noticias', loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasPageModule) },

  { path: 'clima', loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)},
  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  },

  { path: '', redirectTo: 'multas-list', pathMatch: 'full' },
  { path: 'multas-list', loadChildren: () => import('./multas-list/multas-list.module').then(m => m.MultasListPageModule) },
  { path: 'multa-detail/:codigo', loadChildren: () => import('./multa-detail/multa-detail.module').then(m => m.MultaDetailPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
