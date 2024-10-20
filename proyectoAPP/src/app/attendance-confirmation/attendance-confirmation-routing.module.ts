import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceConfirmationPage } from './attendance-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceConfirmationPageRoutingModule {}
