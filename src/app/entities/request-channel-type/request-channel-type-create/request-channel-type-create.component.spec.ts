import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChannelTypeCreateComponent } from './request-channel-type-create.component';

describe('RequestChannelTypeCreateComponent', () => {
  let component: RequestChannelTypeCreateComponent;
  let fixture: ComponentFixture<RequestChannelTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestChannelTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChannelTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
