import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisRemarksTypeComponent } from './diagnosis-remarks-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: DiagnosisRemarksTypeComponent;
  let fixture: ComponentFixture<DiagnosisRemarksTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisRemarksTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisRemarksTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
