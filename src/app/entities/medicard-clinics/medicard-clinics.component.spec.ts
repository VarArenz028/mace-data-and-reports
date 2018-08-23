import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicardClinicsComponent } from './medicard-clinics.component';

describe('MedicardClinicsComponent', () => {
  let component: MedicardClinicsComponent;
  let fixture: ComponentFixture<MedicardClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicardClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicardClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
