import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { AsignaturaDetallePageRoutingModule } from './asignatura-detalle-routing.module';

import { AsignaturaDetallePage } from './asignatura-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaDetallePage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaDetallePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AsignaturaDetallePage]
})
export class AsignaturaDetallePageModule {}
