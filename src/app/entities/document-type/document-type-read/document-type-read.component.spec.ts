import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeReadComponent } from './document-type-read.component';

describe('DocumentTypeReadComponent', () => {
  let component: DocumentTypeReadComponent;
  let fixture: ComponentFixture<DocumentTypeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
