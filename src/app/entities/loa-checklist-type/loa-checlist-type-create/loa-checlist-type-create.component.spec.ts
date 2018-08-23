import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaCheclistTypeCreateComponent } from './loa-checlist-type-create.component';

describe('LoaCheclistTypeCreateComponent', () => {
  let component: LoaCheclistTypeCreateComponent;
  let fixture: ComponentFixture<LoaCheclistTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaCheclistTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaCheclistTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
