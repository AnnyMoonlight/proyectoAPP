import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-confirmation',
  templateUrl: './attendance-confirmation.page.html',
  styleUrls: ['./attendance-confirmation.page.scss'],
})
export class AttendanceConfirmationPage implements OnInit {
  confirmationMessage: string = '';  // Mensaje de confirmación

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit() {
    // Verificar si se recibió algún parámetro o id para mostrar un mensaje personalizado
    const attendanceId = this.route.snapshot.paramMap.get('id');
    if (attendanceId) {
      this.confirmationMessage = `La asistencia con el código ${attendanceId} ha sido registrada exitosamente.`;
    } else {
      this.confirmationMessage = 'Asistencia registrada correctamente.';
    }
  }

  goBack() {
    this.location.back();
  }
}