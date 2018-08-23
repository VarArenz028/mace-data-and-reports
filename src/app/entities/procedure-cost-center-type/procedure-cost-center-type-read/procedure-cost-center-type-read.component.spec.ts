import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCostCenterTypeReadComponent } from './procedure-cost-center-type-read.component';

describe('ProcedureCostCenterTypeReadComponent', () => {
  let component: ProcedureCostCenterTypeReadComponent;
  let fixture: ComponentFixture<ProcedureCostCenterTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureCostCenterTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCostCenterTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
