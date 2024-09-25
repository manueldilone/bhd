import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Curso } from '../../interfaces/Icurso';
import { CursoService } from '../../services/cursos.services';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VercursoComponent implements OnInit, OnDestroy {
  id!: number;
  curso!: Curso;
  loading: boolean = false;

  routeSub!: Subscription;

  /*   curso$!: Observable<curso> -- PIPE ASYNC */

  constructor(private _cursoService: CursoService,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    /*  this.curso$ = this._cursoService.getcurso(this.id)   --PIPE ASYNC */
  /*    this.routeSub =  this.aRoute.params.subscribe(data => {
      this.id = data['id'];
      this.obtenercurso();
    }) */
    this.obtenercurso();
  }

  ngOnDestroy(): void {
    /* this.routeSub.unsubscribe() */
  }

  obtenercurso() {
    this.loading = true;
    this._cursoService.getCurso(this.id).subscribe(data => {
      this.curso = data;
      this.loading = false;
    })
  }

}
