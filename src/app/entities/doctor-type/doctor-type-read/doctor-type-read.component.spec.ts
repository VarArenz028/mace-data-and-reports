import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTypeReadComponent } from './doctor-type-read.component';

describe('DoctorTypeReadComponent', () => {
  let component: DoctorTypeReadComponent;
  let fixture: ComponentFixture<DoctorTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
