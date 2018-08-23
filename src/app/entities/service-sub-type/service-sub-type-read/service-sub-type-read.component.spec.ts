import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubTypeReadComponent } from './service-sub-type-read.component';

describe('ServiceSubTypeReadComponent', () => {
  let component: ServiceSubTypeReadComponent;
  let fixture: ComponentFixture<ServiceSubTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSubTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSubTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
