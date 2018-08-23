import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureApprovalCreateComponent } from './procedure-approval-create.component';

describe('ProcedureApprovalCreateComponent', () => {
  let component: ProcedureApprovalCreateComponent;
  let fixture: ComponentFixture<ProcedureApprovalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureApprovalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureApprovalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
