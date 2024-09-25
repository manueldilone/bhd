import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../../interfaces/Iestudiante';
import { EstudianteService } from '../../services/estudiantes.services';

@Component({
  selector: 'app-agregar-editar-estudiante',
  templateUrl: './agregar-editar-estudiante.component.html',
  styleUrls: ['./agregar-editar-estudiante.component.css']
})
export class AgregarEditarEstudianteComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _EstudianteService: EstudianteService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      //idEstudiante: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      idCurso: ['', Validators.required],
      direccion: ['', Validators.required]
      
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerEstudiante(this.id)
    }
  }

  
  obtenerEstudiante(id: number) {
    this.loading = true;
    this._EstudianteService.getEstudiante(id).subscribe(data => {
      this.form.setValue({
        
      nombre: data.nombre,
      apellido: data.apellido,
      edad: data.edad,
      fechaNacimiento:data.fechaNacimiento,
      idCurso: data.idCurso,
      direccion: data.direccion
      })
      this.loading = false;
    })
  }

  agregarEditarEstudiante() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const Estudiante: Estudiante = {
      idEstudiante: this.form.value.idEstudiante,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      fechaNacimiento: this.form.value.fechaNacimiento,
      idCurso: this.form.value.idCurso,
      direccion: this.form.value.direccion

     
    }

    if(this.id != 0) {
      Estudiante.idEstudiante = this.id;
      this.editarEstudiante(this.id, Estudiante);
    } else {
      this.agregarEstudiante(Estudiante);
    }
  }

  editarEstudiante(id: number, Estudiante: Estudiante) {
    this.loading = true;
    this._EstudianteService.updateEstudiante(id, Estudiante).subscribe(() => {
      this.loading = false;
      
      this.mensajeExito('actualizada');
      this.router.navigate(['/listEstudiante']);
    })
  }

  agregarEstudiante(Estudiante: Estudiante) {
      this._EstudianteService.addEstudiante(Estudiante).subscribe(data => {
        this.mensajeExito('registrada');
        this.router.navigate(['/listEstudiante']);
      })
  }

   
  eliminarEstudiante(id: number) {
    this.loading = true;

    this._EstudianteService.deleteEstudiante(id).subscribe(() => {
     this.mensajeExito('Eliminado');
     this.loading = false;
     this.router.navigate(['/listEstudiante']);
     //this.obtenerEstudiante();
    });    
  }
    
  mensajeExito(texto: string) {
    this._snackBar.open(`el Estudiante fue ${texto} con exito`,'', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }

}
