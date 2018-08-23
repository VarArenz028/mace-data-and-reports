import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaIssuanceTypeReadComponent } from './loa-issuance-type-read.component';

describe('LoaIssuanceTypeReadComponent', () => {
  let component: LoaIssuanceTypeReadComponent;
  let fixture: ComponentFixture<LoaIssuanceTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaIssuanceTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaIssuanceTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
