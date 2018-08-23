import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisTypeReadComponent } from './diagnosis-type-read.component';

describe('DiagnosisTypeReadComponent', () => {
  let component: DiagnosisTypeReadComponent;
  let fixture: ComponentFixture<DiagnosisTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
