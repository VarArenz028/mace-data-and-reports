import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryProcedureComponent } from './temporary-procedure.component';

describe('TemporaryProcedureComponent', () => {
  let component: TemporaryProcedureComponent;
  let fixture: ComponentFixture<TemporaryProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
