import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCoverageComponent } from './team-coverage.component';

describe('TeamCoverageComponent', () => {
  let component: TeamCoverageComponent;
  let fixture: ComponentFixture<TeamCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
