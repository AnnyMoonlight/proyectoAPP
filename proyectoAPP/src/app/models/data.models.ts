import { Usuario, Role } from './bd.models';

export const usuariosSimulados: Usuario[] = [
    {
        id: 1,
        nombreCompleto: 'Hernesto Galeo',
        usuario: 'hernesto',
        clave: '123',
        telefono: '00099876',
        role: Role.Profesor,
        correo: 'her.galeo@gmail.com'
    },
    {
        id: 2,
        nombreCompleto: 'Fiona Hernández',
        usuario: 'fiona',
        clave: '1234',
        telefono: '00099877',
        role: Role.Profesor,
        correo: 'fio.hernandez@gmail.com'
    },
    {
        id: 3,
        nombreCompleto: 'Rodrigo Yañez',
        usuario: 'rodrigo',
        clave: '12345',
        telefono: '00099870',
        role: Role.Profesor,
        correo: 'rod.yañez@gmail.com'
    },
    {
        id: 4,
        nombreCompleto: 'Vicente Figueroa',
        usuario: 'vicente',
        clave: '123456',
        telefono: '00099872',
        role: Role.Estudiante,
        correo: 'vic.figueroa@gmail.com'
    },
    {
        id: 5,
        nombreCompleto: 'Alonso Allende',
        usuario: 'alonso',
        clave: '231',
        telefono: '00072727',
        role: Role.Estudiante,
        correo: 'alo.allende@gmail.com'
    },
    {
        id: 6,
        nombreCompleto: 'Ximena Sánchez',
        usuario: 'ximena',
        clave: '4567',
        telefono: '00099860',
        role: Role.Estudiante,
        correo: 'xim.sanchez@gmail.com'
    }
  ];