import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  onSubmit() {
    this.authService.loginUser(this.username, this.password).subscribe(
      (user) => {
        if (user) {
          // Verificamos el rol del usuario
          if (user.role === 'estudiante') {
            this.router.navigate(['/student-dashboard']);
          } else if (user.role === 'profesor') {
            this.router.navigate(['/professor-dashboard']);
          } else {
            this.presentAlert('Error', 'Rol de usuario no válido.');
          }
        }
      },
      (error) => {
        this.presentAlert('Error', 'Usuario o contraseña incorrectos.');
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']);  // Redirigir a la página de registro
  }

  recoverPassword() {
    this.router.navigate(['/recover-password']);
  }

  ngOnInit() {}
}