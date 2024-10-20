import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.page.html',
  styleUrls: ['./professor-dashboard.page.scss'],
})
export class ProfessorDashboardPage implements OnInit {
  professorName: string = '';
  asignaturas = [ 
    { id: 1, nombre: 'Matemáticas', seccion: '001D' },
    { id: 2, nombre: 'Física', seccion: '002D' },
    { id: 3, nombre: 'Química', seccion: '003D' }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getCurrentUserRole().subscribe(
      (role) => {
        if (role === 'profesor') {
          this.authService.getUserFullName().subscribe(
            (nombreCompleto) => {
              this.professorName = nombreCompleto;
            }
          );
        } else {
          this.router.navigate(['/login']);
        }
      },
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

  verAsignatura(asignaturaId: number) {
    this.router.navigate(['/asignatura-detalle', asignaturaId]);
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}