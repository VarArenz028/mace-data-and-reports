import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisCaseTypeComponent } from './diagnosis-case-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: DiagnosisCaseTypeComponent;
  let fixture: ComponentFixture<DiagnosisCaseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisCaseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisCaseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
