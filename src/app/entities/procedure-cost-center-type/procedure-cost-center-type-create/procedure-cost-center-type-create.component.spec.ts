import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCostCenterTypeCreateComponent } from './procedure-cost-center-type-create.component';

describe('ProcedureCostCenterTypeCreateComponent', () => {
  let component: ProcedureCostCenterTypeCreateComponent;
  let fixture: ComponentFixture<ProcedureCostCenterTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureCostCenterTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCostCenterTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
