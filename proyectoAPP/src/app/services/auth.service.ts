import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://67108c90a85f4164ef2e50fd.mockapi.io/users'; // URL correcta de MockAPI
  private currentUser: any = null;

  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario
  registerUser(username: string, password: string, email: string, role: string, nombreCompleto: string): Observable<any> {
    const newUser = { username, password, email, role, nombreCompleto };
    return this.http.post(`${this.apiUrl}`, newUser).pipe(
      map(response => {
        console.log('Usuario registrado:', response);
        return response;
      }),
      catchError(error => {
        console.error('Error al registrar el usuario:', error);
        return throwError(error);
      })
    );
  }

  // Método para autenticar (iniciar sesión) un usuario
  loginUser(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          this.currentUser = user;  // Guardamos el usuario actual
          return user;  // El usuario se ha autenticado correctamente
        } else {
          throw new Error('Usuario o contraseña incorrectos');
        }
      }),
      catchError(error => {
        console.error('Error en el inicio de sesión', error);
        return throwError(error);
      })
    );
  }

  // Método para verificar si el usuario ya existe
  checkUserExists(username: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        return users.some(user => user.username === username);  // Retorna true si el usuario ya existe
      }),
      catchError(error => {
        console.error('Error verificando la existencia del usuario', error);
        return throwError(error);
      })
    );
  }

  // Método para verificar si el correo electrónico ya existe (nuevo)
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        return users.some(user => user.email === email);  // Retorna true si el correo existe
      }),
      catchError(error => {
        console.error('Error verificando la existencia del correo', error);
        return throwError(error);
      })
    );
  }

  // Método para obtener el nombre completo del usuario actual
  getUserFullName(): Observable<any> {
    if (this.currentUser) {
      return new Observable(observer => {
        observer.next(this.currentUser.nombreCompleto);  // Retorna el nombre completo del usuario actual
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        observer.error('Usuario no autenticado');
      });
    }
  }

  // Obtener el rol del usuario actual
  getCurrentUserRole(): Observable<string> {
    if (this.currentUser) {
      return new Observable(observer => {
        observer.next(this.currentUser.role);  // Retorna el rol del usuario
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        observer.error('Usuario no autenticado');
      });
    }
  }

  // Método para cerrar sesión
  logout() {
    this.currentUser = null;  // Limpiamos el usuario actual
  }

  // Obtener el usuario actual
  getCurrentUser() {
    return this.currentUser;
  }
}