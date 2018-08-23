import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientStatusTypeComponent } from './inpatient-status-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: InpatientStatusTypeComponent;
  let fixture: ComponentFixture<InpatientStatusTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InpatientStatusTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientStatusTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
