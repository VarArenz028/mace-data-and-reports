import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDefinitionComponent } from './team-definition.component';

describe('TeamDefinitionComponent', () => {
  let component: TeamDefinitionComponent;
  let fixture: ComponentFixture<TeamDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
