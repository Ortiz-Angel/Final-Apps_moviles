import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultasListPage } from './multas-list.page';

const routes: Routes = [
  {
    path: '',
    component: MultasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultasListPageRoutingModule {}
