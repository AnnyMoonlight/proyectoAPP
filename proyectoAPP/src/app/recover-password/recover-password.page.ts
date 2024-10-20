import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Cambié de usuariosSimulados a AuthService para trabajar con MockAPI
import { Location } from '@angular/common';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {
  correo: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService,  // Usamos AuthService para validar el correo en MockAPI
    private location: Location
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    if (this.correo) {
      this.authService.checkEmailExists(this.correo).subscribe( // Usamos la nueva función checkEmailExists
        (emailExists) => {
          if (emailExists) {
            this.presentAlert('Recuperación de Contraseña', `Instrucciones de recuperación enviadas a ${this.correo}`);
            this.router.navigate(['/login']);
          } else {
            this.presentAlert('Error', 'Correo electrónico no encontrado.');
          }
        },
        (error) => {
          this.presentAlert('Error', 'Ocurrió un error al procesar la solicitud.');
        }
      );
    } else {
      this.presentAlert('Advertencia', 'Por favor, ingrese su correo electrónico.');
    }
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}