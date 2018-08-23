import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisRemarksTypeCreateComponent } from './diagnosis-remarks-type-create.component';

describe('DiagnosisRemarksTypeCreateComponent', () => {
  let component: DiagnosisRemarksTypeCreateComponent;
  let fixture: ComponentFixture<DiagnosisRemarksTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisRemarksTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisRemarksTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
