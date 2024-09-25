import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Estudiante } from '../../interfaces/Iestudiante';
import { EstudianteService } from '../../services/estudiantes.services';


@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrls: ['./ver-estudiante.component.css']
})
export class VerEstudianteComponent implements OnInit, OnDestroy {
  id!: number;
  Estudiante!: Estudiante;
  loading: boolean = false;

  routeSub!: Subscription;

  /*   Estudiante$!: Observable<Estudiante> -- PIPE ASYNC */

  constructor(private _EstudianteService: EstudianteService,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    /*  this.Estudiante$ = this._EstudianteService.getEstudiante(this.id)   --PIPE ASYNC */
  /*    this.routeSub =  this.aRoute.params.subscribe(data => {
      this.id = data['id'];
      this.obtenerEstudiante();
    }) */
    this.obtenerEstudiante();
  }

  ngOnDestroy(): void {
    /* this.routeSub.unsubscribe() */
  }
  

  obtenerEstudiante() {
    this.loading = true;
    this._EstudianteService.getEstudiante(this.id).subscribe(data => {
      this.Estudiante = data;
      this.loading = false;
    })
  }

}
