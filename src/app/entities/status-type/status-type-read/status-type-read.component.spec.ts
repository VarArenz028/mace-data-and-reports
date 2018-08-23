import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTypeReadComponent } from './status-type-read.component';

describe('StatusTypeReadComponent', () => {
  let component: StatusTypeReadComponent;
  let fixture: ComponentFixture<StatusTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
