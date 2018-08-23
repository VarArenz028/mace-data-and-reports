import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureGroupTypeReadComponent } from './procedure-group-type-read.component';

describe('ProcedureGroupTypeReadComponent', () => {
  let component: ProcedureGroupTypeReadComponent;
  let fixture: ComponentFixture<ProcedureGroupTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureGroupTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureGroupTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
