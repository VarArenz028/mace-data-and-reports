import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaIssuanceTypeCreateComponent } from './loa-issuance-type-create.component';

describe('LoaIssuanceTypeCreateComponent', () => {
  let component: LoaIssuanceTypeCreateComponent;
  let fixture: ComponentFixture<LoaIssuanceTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaIssuanceTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaIssuanceTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
