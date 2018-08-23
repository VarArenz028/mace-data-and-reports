import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicardClinicsCreateComponent } from './medicard-clinics-create.component';

describe('MedicardClinicsCreateComponent', () => {
  let component: MedicardClinicsCreateComponent;
  let fixture: ComponentFixture<MedicardClinicsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicardClinicsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicardClinicsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
