import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServicesCreateComponent } from './other-services-create.component';

describe('OtherServicesCreateComponent', () => {
  let component: OtherServicesCreateComponent;
  let fixture: ComponentFixture<OtherServicesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherServicesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServicesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
