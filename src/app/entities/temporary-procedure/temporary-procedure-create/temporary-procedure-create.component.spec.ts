import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryProcedureCreateComponent } from './temporary-procedure-create.component';

describe('TemporaryProcedureCreateComponent', () => {
  let component: TemporaryProcedureCreateComponent;
  let fixture: ComponentFixture<TemporaryProcedureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryProcedureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryProcedureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
