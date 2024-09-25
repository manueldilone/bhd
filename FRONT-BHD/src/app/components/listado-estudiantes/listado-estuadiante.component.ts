import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from '../../interfaces/Iestudiante';
import { EstudianteService } from '../../services/estudiantes.services';

@Component({
  selector: 'app-listado-estudiante',
  templateUrl: './listado-estaudiante.component.html',
  styleUrls: ['./listado-estudiante.component.css']
})
export class ListadoEstudianteComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['idEstudiante', 'nombre', 'apellido', 'edad', 'fechaNacimiento', 'idCurso','direccion','acciones'];
  dataSource = new MatTableDataSource<Estudiante>();
  loading: boolean = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _snackBar: MatSnackBar, 
            private _EstudianteService:EstudianteService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerEstudiantes() {

    this.loading = true;
    this._EstudianteService.getEstudiantes().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    })
  }
 

  eliminarEstudiante(id: number) {
    this.loading = true;

    this._EstudianteService.deleteEstudiante(id).subscribe(() => {
     this.mensajeExito();
     this.loading = false;
     this.obtenerEstudiantes();
    });    
  }

  mensajeExito() {
    this._snackBar.open('Estudiante eliminado con exito','', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }

}
