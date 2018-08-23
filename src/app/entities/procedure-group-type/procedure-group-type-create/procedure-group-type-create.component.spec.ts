import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureGroupTypeCreateComponent } from './procedure-group-type-create.component';

describe('ProcedureGroupTypeCreateComponent', () => {
  let component: ProcedureGroupTypeCreateComponent;
  let fixture: ComponentFixture<ProcedureGroupTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureGroupTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureGroupTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
