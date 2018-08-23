import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServicesReadComponent } from './other-services-read.component';

describe('OtherServicesReadComponent', () => {
  let component: OtherServicesReadComponent;
  let fixture: ComponentFixture<OtherServicesReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherServicesReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServicesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
