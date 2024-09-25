export interface Estudiante {
    idEstudiante?: number;
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: string; // Puedes usar Date si prefieres manejarlo como objeto Date
    idCurso: number;
    direccion: string;
  }
  