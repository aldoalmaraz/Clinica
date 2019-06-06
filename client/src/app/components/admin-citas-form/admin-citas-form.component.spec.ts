import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCitasFormComponent } from './admin-citas-form.component';

describe('AdminCitasFormComponent', () => {
  let component: AdminCitasFormComponent;
  let fixture: ComponentFixture<AdminCitasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCitasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCitasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
