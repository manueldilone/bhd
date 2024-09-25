import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Estudiante } from '../model/Estudiantes.model'; 
import { environment } from '../../../environments/enviroment'; // Asegúrate de tener la URL base en tu archivo de entorno
import { Estudiante } from '../interfaces/Iestudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Estudiantes/';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteEstudiante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addEstudiante(Estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${this.myAppUrl}${this.myApiUrl}`, Estudiante);
  }

  updateEstudiante(id: number, Estudiante: Estudiante): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, Estudiante);
  }
}
