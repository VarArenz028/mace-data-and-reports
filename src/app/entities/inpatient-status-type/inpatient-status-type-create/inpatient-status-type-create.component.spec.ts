import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientStatusTypeCreateComponent } from './inpatient-status-type-create.component';

describe('InpatientStatusTypeCreateComponent', () => {
  let component: InpatientStatusTypeCreateComponent;
  let fixture: ComponentFixture<InpatientStatusTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpatientStatusTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientStatusTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
