import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorQrPage } from './professor-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorQrPageRoutingModule {}
