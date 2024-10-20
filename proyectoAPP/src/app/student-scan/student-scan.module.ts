import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentScanPageRoutingModule } from './student-scan-routing.module';

import { StudentScanPage } from './student-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentScanPageRoutingModule
  ],
  declarations: [StudentScanPage]
})
export class StudentScanPageModule {}
