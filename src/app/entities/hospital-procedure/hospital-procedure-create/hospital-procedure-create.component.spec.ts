import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalProcedureCreateComponent } from './hospital-procedure-create.component';

describe('HospitalProcedureCreateComponent', () => {
  let component: HospitalProcedureCreateComponent;
  let fixture: ComponentFixture<HospitalProcedureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalProcedureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalProcedureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
