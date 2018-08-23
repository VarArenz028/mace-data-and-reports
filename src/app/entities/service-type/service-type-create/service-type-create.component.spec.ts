import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeCreateComponent } from './service-type-create.component';

describe('ServiceTypeCreateComponent', () => {
  let component: ServiceTypeCreateComponent;
  let fixture: ComponentFixture<ServiceTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
