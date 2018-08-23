import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureRemarksTypeComponent } from './procedure-remarks-type.component';

describe('ProcedureRemarksTypeComponent', () => {
  let component: ProcedureRemarksTypeComponent;
  let fixture: ComponentFixture<ProcedureRemarksTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureRemarksTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureRemarksTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
