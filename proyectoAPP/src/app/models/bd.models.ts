export enum Role {
  Estudiante = 'estudiante',
  Profesor = 'profesor'
}

export interface Usuario {
    id: number;
    nombreCompleto: string;
    usuario: string;
    clave: string;
    telefono: string;
    role: Role;
    correo: string;
  }