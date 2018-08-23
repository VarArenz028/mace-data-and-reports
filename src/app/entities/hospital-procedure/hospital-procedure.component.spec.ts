import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalProcedureComponent } from './hospital-procedure.component';

describe('HospitalProcedureComponent', () => {
  let component: HospitalProcedureComponent;
  let fixture: ComponentFixture<HospitalProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
