import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChannelTypeReadComponent } from './request-channel-type-read.component';

describe('RequestChannelTypeReadComponent', () => {
  let component: RequestChannelTypeReadComponent;
  let fixture: ComponentFixture<RequestChannelTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestChannelTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChannelTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
