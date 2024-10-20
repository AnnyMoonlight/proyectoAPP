import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {
  studentName: string = '';
  asignaturas = [
    { id: 1, nombre: 'Matemáticas', seccion: '001D' },
    { id: 2, nombre: 'Física', seccion: '002D' },
    { id: 3, nombre: 'Química', seccion: '003D' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.authService.getCurrentUserRole().subscribe(
      (role) => {
        if (role === 'estudiante') {
          this.loadStudentData();
        } else {
          this.router.navigate(['/login']);
        }
      },
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

  ionViewWillEnter() {
    this.loadStudentData();
  }

  loadStudentData() {
    this.authService.getUserFullName().subscribe(
      (userData) => {
        this.studentName = userData;  // Ahora usamos el nombre completo obtenido de MockAPI
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        console.error('Error al obtener el nombre del usuario:', error);
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