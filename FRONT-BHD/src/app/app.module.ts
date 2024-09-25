import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SpinnerComponent } from './spinner/spinner.component'; // Asegúrate de que la ruta sea correcta
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app/app-routing.module';

// Modulos


import { SharedModule } from './shared/shared.module';

// Componentes
import { AgregarEditarcursoComponent } from './components/agregar-editar-cursos/agregar-editar-curso.component';
import { AgregarEditarEstudianteComponent } from './components/agregar-editar-estudiantes/agregar-editar-estudiante.component';
import { ListadoCursoComponent } from './components/listado-cursos/listado-curso.component';
import { ListadoEstudianteComponent } from './components/listado-estudiantes/listado-estuadiante.component';
import { VercursoComponent } from './components/ver-cursos/ver-curso.component';
import { VerEstudianteComponent } from './components/ver-estudiantes/ver-estudiante.component';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';






@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarcursoComponent,
    AgregarEditarEstudianteComponent,
    ListadoCursoComponent,
    ListadoEstudianteComponent,
    VercursoComponent,
    VerEstudianteComponent
 //   SpinnerComponent,
   // MatSortModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
//    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
