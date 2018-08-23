import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChannelTypeComponent } from './request-channel-type.component';

describe('RequestChannelTypeComponent', () => {
  let component: RequestChannelTypeComponent;
  let fixture: ComponentFixture<RequestChannelTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestChannelTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChannelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
