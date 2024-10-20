import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as QRious from 'qrious'; // Importamos la librería

@Component({
  selector: 'app-professor-qr',
  templateUrl: './professor-qr.page.html',
  styleUrls: ['./professor-qr.page.scss'],
})
export class ProfessorQrPage implements OnInit {
  asignaturaId: string = '001D';  // Aquí podemos cambiar el ID de la asignatura
  qrCodeDataUrl: string = '';  // URL del código QR generado

  constructor(private location: Location) { }

  ngOnInit() {
    this.generateQRCode();  // Generamos el código QR cuando se carga la página
  }

  // Método para generar un identificador único (por ejemplo, timestamp)
  private generateUniqueCode(): string {
    return new Date().getTime().toString();  // Usamos el timestamp como identificador único
  }

  // Método para generar el código QR
  generateQRCode() {
    const uniqueCode = this.generateUniqueCode(); // Obtenemos un identificador único
    const qr = new QRious({
      value: `confirmacion asistencia/${uniqueCode}`, // Valor del QR con el enlace interno a la vista de confirmación de asistencia
      size: 200  // Tamaño del código QR
    });
    this.qrCodeDataUrl = qr.toDataURL();  // Convertimos el QR en una imagen en formato Data URL
  }

  // Método para volver atrás
  goBack() {
    this.location.back();
  }
}