import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaCheclistTypeReadComponent } from './loa-checlist-type-read.component';

describe('LoaCheclistTypeReadComponent', () => {
  let component: LoaCheclistTypeReadComponent;
  let fixture: ComponentFixture<LoaCheclistTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaCheclistTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaCheclistTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
