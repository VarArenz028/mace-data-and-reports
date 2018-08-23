import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCostCenterTypeComponent } from './procedure-cost-center-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: ProcedureCostCenterTypeComponent;
  let fixture: ComponentFixture<ProcedureCostCenterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProcedureCostCenterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCostCenterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
