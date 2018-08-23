import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureReadComponent } from './procedure-read.component';

describe('ProcedureReadComponent', () => {
  let component: ProcedureReadComponent;
  let fixture: ComponentFixture<ProcedureReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
