import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureTypeReadComponent } from './procedure-type-read.component';

describe('ProcedureTypeReadComponent', () => {
  let component: ProcedureTypeReadComponent;
  let fixture: ComponentFixture<ProcedureTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
