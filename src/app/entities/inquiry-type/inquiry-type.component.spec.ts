import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryTypeComponent } from './inquiry-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: InquiryTypeComponent;
  let fixture: ComponentFixture<InquiryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
