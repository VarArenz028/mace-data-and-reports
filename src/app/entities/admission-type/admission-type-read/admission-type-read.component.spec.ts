import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTypeReadComponent } from './admission-type-read.component';

describe('AdmissionTypeReadComponent', () => {
  let component: AdmissionTypeReadComponent;
  let fixture: ComponentFixture<AdmissionTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
