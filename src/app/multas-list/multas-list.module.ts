import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultasListPageRoutingModule } from './multas-list-routing.module';

import { MultasListPage } from './multas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultasListPageRoutingModule
  ],
  declarations: [MultasListPage]
})
export class MultasListPageModule {}
