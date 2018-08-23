import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalProcedureReadComponent } from './hospital-procedure-read.component';

describe('HospitalProcedureReadComponent', () => {
  let component: HospitalProcedureReadComponent;
  let fixture: ComponentFixture<HospitalProcedureReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalProcedureReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalProcedureReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
