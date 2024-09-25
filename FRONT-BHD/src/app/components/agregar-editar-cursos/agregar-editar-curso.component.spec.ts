import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarcursoComponent } from './agregar-editar-curso.component';

describe('AgregarEditarcursoComponent', () => {
  let component: AgregarEditarcursoComponent;
  let fixture: ComponentFixture<AgregarEditarcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarcursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
