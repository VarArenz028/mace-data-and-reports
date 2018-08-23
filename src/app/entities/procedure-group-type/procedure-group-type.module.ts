import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ProcedureGroupTypeRoutingModule } from './procedure-group-type-routing.module';
import { ProcedureGroupTypeComponent} from './procedure-group-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ProcedureGroupTypeCreateComponent } from './procedure-group-type-create/procedure-group-type-create.component';
import { ProcedureGroupTypeReadComponent } from './procedure-group-type-read/procedure-group-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        ProcedureGroupTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ProcedureGroupTypeComponent, ProcedureGroupTypeCreateComponent, ProcedureGroupTypeReadComponent],
    exports: [ProcedureGroupTypeComponent]
})
export class ProcedureGroupTypeModule {
}
