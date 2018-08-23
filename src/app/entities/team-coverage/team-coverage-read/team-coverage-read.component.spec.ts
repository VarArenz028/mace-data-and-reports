import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCoverageReadComponent } from './team-coverage-read.component';

describe('TeamCoverageReadComponent', () => {
  let component: TeamCoverageReadComponent;
  let fixture: ComponentFixture<TeamCoverageReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCoverageReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCoverageReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
