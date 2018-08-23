import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionTypeCreateComponent } from './disposition-type-create.component';

describe('DispositionTypeCreateComponent', () => {
  let component: DispositionTypeCreateComponent;
  let fixture: ComponentFixture<DispositionTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositionTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositionTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
