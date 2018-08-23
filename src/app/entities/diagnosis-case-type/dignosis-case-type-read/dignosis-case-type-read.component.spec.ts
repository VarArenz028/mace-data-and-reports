import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DignosisCaseTypeReadComponent } from './dignosis-case-type-read.component';

describe('DignosisCaseTypeReadComponent', () => {
  let component: DignosisCaseTypeReadComponent;
  let fixture: ComponentFixture<DignosisCaseTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DignosisCaseTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DignosisCaseTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
