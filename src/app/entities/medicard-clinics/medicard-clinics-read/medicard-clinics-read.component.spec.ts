import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicardClinicsReadComponent } from './medicard-clinics-read.component';

describe('MedicardClinicsReadComponent', () => {
  let component: MedicardClinicsReadComponent;
  let fixture: ComponentFixture<MedicardClinicsReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicardClinicsReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicardClinicsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
