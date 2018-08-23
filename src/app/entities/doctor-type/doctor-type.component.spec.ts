import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTypeComponent } from './doctor-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: DoctorTypeComponent;
  let fixture: ComponentFixture<DoctorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
