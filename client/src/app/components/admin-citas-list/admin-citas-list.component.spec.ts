import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCitasListComponent } from './admin-citas-list.component';

describe('AdminCitasListComponent', () => {
  let component: AdminCitasListComponent;
  let fixture: ComponentFixture<AdminCitasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCitasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCitasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
