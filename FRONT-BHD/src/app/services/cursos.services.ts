import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Curso } from '../model/cursos.model'; 
import { environment } from '../../../environments/enviroment'; // Asegúrate de tener la URL base en tu archivo de entorno
import { Curso } from '../interfaces/Icurso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Cursos/';

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCurso(Curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.myAppUrl}${this.myApiUrl}`, Curso);
  }

  updateCurso(id: number, Curso: Curso): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, Curso);
  }
}
