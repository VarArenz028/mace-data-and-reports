import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureApprovalTypeComponent } from './procedure-approval-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: ProcedureApprovalTypeComponent;
  let fixture: ComponentFixture<ProcedureApprovalTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureApprovalTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureApprovalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
