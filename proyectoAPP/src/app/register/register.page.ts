import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombreCompleto: string = '';  // Campo para el nombre completo
  username: string = '';         // Campo para el nombre de usuario
  email: string = '';           // Campo para el correo electrónico
  password: string = '';        // Contraseña
  role: string = '';            // Campo para el rol (profesor/estudiante)

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  // Mostrar alertas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Método para registrar usuario
  onSubmit() {
    // Verifica si todos los campos están completos
    if (this.username && this.email && this.password && this.role && this.nombreCompleto) {
      // Verificar si el usuario ya existe antes de intentar registrarlo
      this.authService.checkUserExists(this.username).subscribe((exists: boolean) => {
        if (exists) {
          // Si el usuario ya existe, mostramos una alerta
          this.presentAlert('Error', 'El nombre de usuario ya está registrado.');
        } else {
          // Si no existe, registramos al usuario
          this.authService.registerUser(this.username, this.password, this.email, this.role, this.nombreCompleto)
            .subscribe(() => {
              this.presentAlert('Éxito', 'Usuario registrado exitosamente');
              this.router.navigate(['/login']); // Redirige al login después del registro
            }, (error) => {
              this.presentAlert('Error', 'Error al registrar usuario: ' + error.message);
            });
        }
      }, (error) => {
        this.presentAlert('Error', 'Error verificando la existencia del usuario: ' + error.message);
      });
    } else {
      this.presentAlert('Advertencia', 'Por favor, complete todos los campos.');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}