import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTypeCreateComponent } from './doctor-type-create.component';

describe('DoctorTypeCreateComponent', () => {
  let component: DoctorTypeCreateComponent;
  let fixture: ComponentFixture<DoctorTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
