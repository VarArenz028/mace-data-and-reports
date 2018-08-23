import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureTypeCreateComponent } from './procedure-type-create.component';

describe('ProcedureTypeCreateComponent', () => {
  let component: ProcedureTypeCreateComponent;
  let fixture: ComponentFixture<ProcedureTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
