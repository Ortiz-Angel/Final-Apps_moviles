import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultaDetailPageRoutingModule } from './multa-detail-routing.module';

import { MultaDetailPage } from './multa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultaDetailPageRoutingModule
  ],
  declarations: [MultaDetailPage]
})
export class MultaDetailPageModule {}
