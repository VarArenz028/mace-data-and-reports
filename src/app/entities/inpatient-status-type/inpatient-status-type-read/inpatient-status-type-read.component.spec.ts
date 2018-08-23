import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientStatusTypeReadComponent } from './inpatient-status-type-read.component';

describe('InpatientStatusTypeReadComponent', () => {
  let component: InpatientStatusTypeReadComponent;
  let fixture: ComponentFixture<InpatientStatusTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpatientStatusTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientStatusTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
