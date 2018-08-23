import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureApprovalReadComponent } from './procedure-approval-read.component';

describe('ProcedureApprovalReadComponent', () => {
  let component: ProcedureApprovalReadComponent;
  let fixture: ComponentFixture<ProcedureApprovalReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureApprovalReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureApprovalReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
