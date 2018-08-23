import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryProcedureReadComponent } from './temporary-procedure-read.component';

describe('TemporaryProcedureReadComponent', () => {
  let component: TemporaryProcedureReadComponent;
  let fixture: ComponentFixture<TemporaryProcedureReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryProcedureReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryProcedureReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
