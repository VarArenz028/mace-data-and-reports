import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryTypeReadComponent } from './inquiry-type-read.component';

describe('InquiryTypeReadComponent', () => {
  let component: InquiryTypeReadComponent;
  let fixture: ComponentFixture<InquiryTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
