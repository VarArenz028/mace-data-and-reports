import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationYesNoComponent } from './dialog-confirmation-yes-no.component';

describe('DialogConfirmationYesNoComponent', () => {
  let component: DialogConfirmationYesNoComponent;
  let fixture: ComponentFixture<DialogConfirmationYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmationYesNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
