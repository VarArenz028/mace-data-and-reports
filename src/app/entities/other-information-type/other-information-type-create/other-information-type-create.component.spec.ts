import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationTypeCreateComponent } from './other-information-type-create.component';

describe('OtherInformationTypeCreateComponent', () => {
  let component: OtherInformationTypeCreateComponent;
  let fixture: ComponentFixture<OtherInformationTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInformationTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInformationTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
