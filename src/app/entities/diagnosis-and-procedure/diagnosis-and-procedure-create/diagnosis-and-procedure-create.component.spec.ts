import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisAndProcedureCreateComponent } from './diagnosis-and-procedure-create.component';

describe('DiagnosisAndProcedureCreateComponent', () => {
  let component: DiagnosisAndProcedureCreateComponent;
  let fixture: ComponentFixture<DiagnosisAndProcedureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisAndProcedureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisAndProcedureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
