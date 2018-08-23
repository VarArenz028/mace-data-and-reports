import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeReadComponent } from './service-type-read.component';

describe('ServiceTypeReadComponent', () => {
  let component: ServiceTypeReadComponent;
  let fixture: ComponentFixture<ServiceTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
