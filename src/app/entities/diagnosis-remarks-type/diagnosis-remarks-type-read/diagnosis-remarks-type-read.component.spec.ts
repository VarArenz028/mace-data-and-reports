import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisRemarksTypeReadComponent } from './diagnosis-remarks-type-read.component';

describe('DiagnosisRemarksTypeReadComponent', () => {
  let component: DiagnosisRemarksTypeReadComponent;
  let fixture: ComponentFixture<DiagnosisRemarksTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisRemarksTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisRemarksTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
