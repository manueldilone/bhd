import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../interfaces/Icurso';
import { CursoService } from '../../services/cursos.services';

@Component({
  selector: 'app-agregar-editar-curso',
  templateUrl: './agregar-editar-curso.component.html',
  styleUrls: ['./agregar-editar-curso.component.css']
})
export class AgregarEditarcursoComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _cursoService: CursoService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      //idCurso: ['', Validators.required],
      descripcion: ['', Validators.required],
     
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0) {
      this.operacion = 'Editar';
      this.obtenercurso(this.id)
    }
  }

 
  obtenercurso(id: number) {
    this.loading = true;
    this._cursoService.getCurso(id).subscribe(data => {
      this.form.setValue({
        nombre: data.idCurso,
        descripcion: data.descripcion
       
      })
      this.loading = false;
    })
  }

  agregarEditarcurso() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const curso: Curso = {
      idCurso: this.form.value.idCurso,
      descripcion: this.form.value.descripcion
      
    }

    if(this.id != 0) {
      curso.idCurso = this.id;
      this.editarcurso(this.id, curso);
    } else {
      this.agregarcurso(curso);
    }
  }

  editarcurso(id: number, curso: Curso) {
    this.loading = true;
    this._cursoService.updateCurso(id, curso).subscribe(() => {
      this.loading = false;

      this.mensajeExito('actualizado');
      this.router.navigate(['/listCursos']);
    })
  }

  agregarcurso(curso: Curso) {
      this._cursoService.addCurso(curso).subscribe(data => {
        this.mensajeExito('registrada');
        this.router.navigate(['/listCursos']);
      })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`el curso fue ${texto} con exito`,'', {
      duration: 4000,
      horizontalPosition: 'right',
      
    });
  }

}
