import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresListComponent } from './doctores-list.component';

describe('DoctoresListComponent', () => {
  let component: DoctoresListComponent;
  let fixture: ComponentFixture<DoctoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
