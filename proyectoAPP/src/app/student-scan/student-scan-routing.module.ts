import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentScanPage } from './student-scan.page';

const routes: Routes = [
  {
    path: '',
    component: StudentScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentScanPageRoutingModule {}
