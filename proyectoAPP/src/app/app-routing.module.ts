import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'recover-password', loadChildren: () => import('./recover-password/recover-password.module').then(m => m.RecoverPasswordPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'student-scan', loadChildren: () => import('./student-scan/student-scan.module').then(m => m.StudentScanPageModule) },
  { path: 'attendance-confirmation', loadChildren: () => import('./attendance-confirmation/attendance-confirmation.module').then(m => m.AttendanceConfirmationPageModule) },
  { path: 'professor-qr', loadChildren: () => import('./professor-qr/professor-qr.module').then(m => m.ProfessorQrPageModule) },
  { path: 'professor-dashboard', loadChildren: () => import('./professor-dashboard/professor-dashboard.module').then( m => m.ProfessorDashboardPageModule) },
  { path: 'asignatura-detalle/:id', loadChildren: () => import('./asignatura-detalle/asignatura-detalle.module').then(m => m.AsignaturaDetallePageModule) },
  { path: 'student-dashboard', loadChildren: () => import('./student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) },
  { path: 'attendance-confirmation/:id', loadChildren: () => import('./attendance-confirmation/attendance-confirmation.module').then(m => m.AttendanceConfirmationPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
