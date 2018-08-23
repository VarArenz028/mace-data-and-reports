import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisAndProcedureComponent } from './diagnosis-and-procedure.component';

describe('DiagnosisAndProcedureComponent', () => {
  let component: DiagnosisAndProcedureComponent;
  let fixture: ComponentFixture<DiagnosisAndProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisAndProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisAndProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
