import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureRemarksTypeReadComponent } from './procedure-remarks-type-read.component';

describe('ProcedureRemarksTypeReadComponent', () => {
  let component: ProcedureRemarksTypeReadComponent;
  let fixture: ComponentFixture<ProcedureRemarksTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureRemarksTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureRemarksTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
