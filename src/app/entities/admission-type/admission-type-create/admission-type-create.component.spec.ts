import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTypeCreateComponent } from './admission-type-create.component';

describe('AdmissionTypeCreateComponent', () => {
  let component: AdmissionTypeCreateComponent;
  let fixture: ComponentFixture<AdmissionTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
