import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaConductorPage } from './consulta-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaConductorPageRoutingModule {}
