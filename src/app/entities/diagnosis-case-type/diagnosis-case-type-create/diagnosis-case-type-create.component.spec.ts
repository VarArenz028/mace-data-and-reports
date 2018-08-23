import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisCaseTypeCreateComponent } from './diagnosis-case-type-create.component';

describe('DiagnosisCaseTypeCreateComponent', () => {
  let component: DiagnosisCaseTypeCreateComponent;
  let fixture: ComponentFixture<DiagnosisCaseTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisCaseTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisCaseTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
