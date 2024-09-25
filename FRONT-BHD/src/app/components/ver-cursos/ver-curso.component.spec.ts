import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercursoComponent } from './ver-curso.component';

describe('VercursoComponent', () => {
  let component: VercursoComponent;
  let fixture: ComponentFixture<VercursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
