import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-asignatura-detalle',
  templateUrl: './asignatura-detalle.page.html',
  styleUrls: ['./asignatura-detalle.page.scss'],
})
export class AsignaturaDetallePage implements OnInit {
  asignaturaId: number = 0;
  asignaturaDetalles: any = null;
  userRole: string = '';

  asignaturas = [
    { id: 1, nombre: 'Matemáticas', descripcion: 'Cálculo diferencial e integral', seccion: '001D', horario: 'Lunes y Miércoles 8:00-10:00' },
    { id: 2, nombre: 'Física', descripcion: 'Física cuántica', seccion: '002D', horario: 'Martes y Jueves 10:00-12:00' },
    { id: 3, nombre: 'Química', descripcion: 'Química orgánica', seccion: '003D', horario: 'Viernes 14:00-16:00' }
  ];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.asignaturaId = Number(this.route.snapshot.paramMap.get('id'));
    this.asignaturaDetalles = this.asignaturas.find(a => a.id === this.asignaturaId);

    this.authService.getCurrentUserRole().subscribe(
      (role) => {
        this.userRole = role;
      },
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

  verAsignatura(id: number) {
    this.router.navigate(['/asignatura-detalle', id]);  
  }

  goBack() {
    this.location.back();
  }

  goToQrPage() {
    if (this.userRole === 'profesor') {
      this.router.navigate(['/professor-qr']);
    }
  }

  goToScanPage() {
    if (this.userRole === 'estudiante') {
      this.router.navigate(['/student-scan']);
    }
  }
}