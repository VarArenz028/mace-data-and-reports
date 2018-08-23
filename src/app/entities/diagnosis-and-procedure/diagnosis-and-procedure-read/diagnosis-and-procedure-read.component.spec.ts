import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisAndProcedureReadComponent } from './diagnosis-and-procedure-read.component';

describe('DiagnosisAndProcedureReadComponent', () => {
  let component: DiagnosisAndProcedureReadComponent;
  let fixture: ComponentFixture<DiagnosisAndProcedureReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisAndProcedureReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisAndProcedureReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
