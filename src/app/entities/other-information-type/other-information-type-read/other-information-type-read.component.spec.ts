import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationTypeReadComponent } from './other-information-type-read.component';

describe('OtherInformationTypeReadComponent', () => {
  let component: OtherInformationTypeReadComponent;
  let fixture: ComponentFixture<OtherInformationTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInformationTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInformationTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
