import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCoverageCreateComponent } from './team-coverage-create.component';

describe('TeamCoverageCreateComponent', () => {
  let component: TeamCoverageCreateComponent;
  let fixture: ComponentFixture<TeamCoverageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCoverageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCoverageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
