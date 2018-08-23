import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubTypeComponent } from './service-sub-type.component';

describe('ServiceSubTypeComponent', () => {
  let component: ServiceSubTypeComponent;
  let fixture: ComponentFixture<ServiceSubTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSubTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
