import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../interfaces/Icurso';
import { CursoService } from '../../services/cursos.services';

@Component({
  selector: 'app-listado-curso',
 templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['idCurso', 'descripcion','acciones'];
  dataSource = new MatTableDataSource<Curso>();
  loading: boolean = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _snackBar: MatSnackBar, 
            private _CursoService:CursoService) { }

  ngOnInit(): void {
    this.obtenerCursos();
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

  obtenerCursos() {

    this.loading = true;
    this._CursoService.getCursos().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
      

    })
  }
 

  eliminarCurso(id: number) {
    this.loading = true;

    this._CursoService.deleteCurso(id).subscribe(() => {
     this.mensajeExito();
     this.loading = false;
     this.obtenerCursos();
    });    
  }

  mensajeExito() {
    this._snackBar.open('La Curso fue eliminada con exito','', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }

}
