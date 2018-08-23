import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { TeamCoverageRoutingModule } from './team-coverage-routing.module';
import { TeamCoverageComponent} from './team-coverage.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { TeamCoverageCreateComponent } from './team-coverage-create/team-coverage-create.component';
import { TeamCoverageReadComponent } from './team-coverage-read/team-coverage-read.component';

@NgModule({
    imports: [
        CommonModule,
        TeamCoverageRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [TeamCoverageComponent, TeamCoverageCreateComponent, TeamCoverageReadComponent],
    exports: [TeamCoverageComponent]
})
export class TeamCoverageModule {
}
