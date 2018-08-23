import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCreateComponent } from './procedure-create.component';

describe('ProcedureCreateComponent', () => {
  let component: ProcedureCreateComponent;
  let fixture: ComponentFixture<ProcedureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
