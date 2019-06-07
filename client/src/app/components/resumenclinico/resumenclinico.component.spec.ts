import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenclinicoComponent } from './resumenclinico.component';

describe('ResumenclinicoComponent', () => {
  let component: ResumenclinicoComponent;
  let fixture: ComponentFixture<ResumenclinicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenclinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenclinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
