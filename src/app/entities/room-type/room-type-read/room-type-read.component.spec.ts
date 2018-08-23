import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeReadComponent } from './room-type-read.component';

describe('RoomTypeReadComponent', () => {
  let component: RoomTypeReadComponent;
  let fixture: ComponentFixture<RoomTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
