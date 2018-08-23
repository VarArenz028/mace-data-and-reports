import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDefinitionCreateComponent } from './team-definition-create.component';

describe('TeamDefinitionCreateComponent', () => {
  let component: TeamDefinitionCreateComponent;
  let fixture: ComponentFixture<TeamDefinitionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDefinitionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDefinitionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
