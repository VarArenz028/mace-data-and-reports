import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTypeCreateComponent } from './status-type-create.component';

describe('StatusTypeCreateComponent', () => {
  let component: StatusTypeCreateComponent;
  let fixture: ComponentFixture<StatusTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
