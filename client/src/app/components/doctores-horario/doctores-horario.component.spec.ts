import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresHorarioComponent } from './doctores-horario.component';

describe('DoctoresHorarioComponent', () => {
  let component: DoctoresHorarioComponent;
  let fixture: ComponentFixture<DoctoresHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
