import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionTypeComponent } from './disposition-type.component';

describe('ProcedureApprovalTypeComponent', () => {
  let component: DispositionTypeComponent;
  let fixture: ComponentFixture<DispositionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DispositionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
