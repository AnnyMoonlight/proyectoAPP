import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceConfirmationPageRoutingModule } from './attendance-confirmation-routing.module';

import { AttendanceConfirmationPage } from './attendance-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceConfirmationPageRoutingModule
  ],
  declarations: [AttendanceConfirmationPage]
})
export class AttendanceConfirmationPageModule {}
