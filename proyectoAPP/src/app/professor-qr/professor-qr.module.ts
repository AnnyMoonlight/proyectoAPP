import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorQrPageRoutingModule } from './professor-qr-routing.module';

import { ProfessorQrPage } from './professor-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorQrPageRoutingModule
  ],
  declarations: [ProfessorQrPage]
})
export class ProfessorQrPageModule {}
