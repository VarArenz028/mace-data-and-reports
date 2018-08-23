import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDefinitionComponent } from './team-definition.component';


const routes: Routes = [
    { path: 'team-definition', component: TeamDefinitionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDefinitionRoutingModule { }
