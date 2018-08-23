import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformationComponent } from './dialog-information.component';

describe('DialogInformationComponent', () => {
  let component: DialogInformationComponent;
  let fixture: ComponentFixture<DialogInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
