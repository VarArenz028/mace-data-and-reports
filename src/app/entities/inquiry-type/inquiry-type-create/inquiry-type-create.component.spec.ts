import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryTypeCreateComponent } from './inquiry-type-create.component';

describe('InquiryTypeCreateComponent', () => {
  let component: InquiryTypeCreateComponent;
  let fixture: ComponentFixture<InquiryTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
