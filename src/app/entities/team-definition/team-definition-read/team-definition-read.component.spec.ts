import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDefinitionReadComponent } from './team-definition-read.component';

describe('TeamDefinitionReadComponent', () => {
  let component: TeamDefinitionReadComponent;
  let fixture: ComponentFixture<TeamDefinitionReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDefinitionReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDefinitionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
