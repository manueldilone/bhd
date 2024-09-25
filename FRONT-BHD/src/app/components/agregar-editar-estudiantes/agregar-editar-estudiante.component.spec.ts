import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEstudianteComponent } from './agregar-editar-estudiante.component';

describe('AgregarEditarEstudianteComponent', () => {
  let component: AgregarEditarEstudianteComponent;
  let fixture: ComponentFixture<AgregarEditarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
