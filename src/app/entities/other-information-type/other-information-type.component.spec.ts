import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationTypeComponent } from './other-information-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: OtherInformationTypeComponent;
  let fixture: ComponentFixture<OtherInformationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherInformationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInformationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
