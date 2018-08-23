import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisTypeCreateComponent } from './diagnosis-type-create.component';

describe('DiagnosisTypeCreateComponent', () => {
  let component: DiagnosisTypeCreateComponent;
  let fixture: ComponentFixture<DiagnosisTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
