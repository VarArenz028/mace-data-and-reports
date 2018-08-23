import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionTypeReadComponent } from './disposition-type-read.component';

describe('DispositionTypeReadComponent', () => {
  let component: DispositionTypeReadComponent;
  let fixture: ComponentFixture<DispositionTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositionTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositionTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
