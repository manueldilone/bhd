import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoCursoComponent } from './components/listado-cursos/listado-curso.component';
import { ListadoEstudianteComponent } from './components/listado-estudiantes/listado-estuadiante.component';
import { AgregarEditarcursoComponent } from './components/agregar-editar-cursos/agregar-editar-curso.component';
import { AgregarEditarEstudianteComponent } from './components/agregar-editar-estudiantes/agregar-editar-estudiante.component';
import { VercursoComponent } from './components/ver-cursos/ver-curso.component';
import { VerEstudianteComponent } from './components/ver-estudiantes/ver-estudiante.component';
//import { VerEstudianteComponent } from './components/ver-mascota/ver-mascota.component';
import { HomeComponent }        from './components/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  
  {path: 'home',  component: HomeComponent},
  { path:'listCursos', component: ListadoCursoComponent },
  { path:'listEstudiante', component: ListadoEstudianteComponent },
  { path:'agregaCursos', component: AgregarEditarcursoComponent },
  { path:'agregarEstudiante', component: AgregarEditarEstudianteComponent },
  { path:'verCursos/:id', component: VercursoComponent },
  { path:'verEstudiante/:id', component: VerEstudianteComponent },
  { path:'editarCursos/:id', component: AgregarEditarcursoComponent },
  { path:'editarEstudiante/:id', component: AgregarEditarEstudianteComponent }
  //{ path: '**',  redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
