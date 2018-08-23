import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamCoverageComponent } from './team-coverage.component';


const routes: Routes = [
    { path: 'team-coverage', component: TeamCoverageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamCoverageRoutingModule { }
