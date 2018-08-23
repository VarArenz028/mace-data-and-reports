import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaIssuanceTypeComponent } from './loa-issuance-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: LoaIssuanceTypeComponent;
  let fixture: ComponentFixture<LoaIssuanceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaIssuanceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaIssuanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
