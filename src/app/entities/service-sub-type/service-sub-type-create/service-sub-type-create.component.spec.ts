import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubTypeCreateComponent } from './service-sub-type-create.component';

describe('ServiceSubTypeCreateComponent', () => {
  let component: ServiceSubTypeCreateComponent;
  let fixture: ComponentFixture<ServiceSubTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSubTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSubTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
