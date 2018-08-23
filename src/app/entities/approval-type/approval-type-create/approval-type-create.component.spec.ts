import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTypeCreateComponent } from './approval-type-create.component';

describe('ApprovalTypeCreateComponent', () => {
  let component: ApprovalTypeCreateComponent;
  let fixture: ComponentFixture<ApprovalTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
