import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureTypeComponent } from './procedure-type.component';

describe('ProcedureTypeComponent', () => {
  let component: ProcedureTypeComponent;
  let fixture: ComponentFixture<ProcedureTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
