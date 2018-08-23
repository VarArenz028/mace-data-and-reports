import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTypeReadComponent } from './approval-type-read.component';

describe('ApprovalTypeReadComponent', () => {
  let component: ApprovalTypeReadComponent;
  let fixture: ComponentFixture<ApprovalTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
