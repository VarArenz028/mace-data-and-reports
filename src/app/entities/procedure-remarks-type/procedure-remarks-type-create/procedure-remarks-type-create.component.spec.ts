import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureRemarksTypeCreateComponent } from './procedure-remarks-type-create.component';

describe('ProcedureRemarksTypeCreateComponent', () => {
  let component: ProcedureRemarksTypeCreateComponent;
  let fixture: ComponentFixture<ProcedureRemarksTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureRemarksTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureRemarksTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
