import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { TeamDefinitionRoutingModule } from './team-definition-routing.module';
import { TeamDefinitionComponent} from './team-definition.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { TeamDefinitionCreateComponent } from './team-definition-create/team-definition-create.component';
import { TeamDefinitionReadComponent } from './team-definition-read/team-definition-read.component';

@NgModule({
    imports: [
        CommonModule,
        TeamDefinitionRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [TeamDefinitionComponent, TeamDefinitionCreateComponent, TeamDefinitionReadComponent],
    exports: [TeamDefinitionComponent]
})
export class TeamDefinitionModule {
}
