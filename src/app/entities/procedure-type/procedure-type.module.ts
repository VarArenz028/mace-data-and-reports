import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ProcedureTypeRoutingModule } from './procedure-type-routing.module';
import { ProcedureTypeComponent} from './procedure-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ProcedureTypeCreateComponent } from './procedure-type-create/procedure-type-create.component';
import { ProcedureTypeReadComponent } from './procedure-type-read/procedure-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        ProcedureTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ProcedureTypeComponent, ProcedureTypeCreateComponent, ProcedureTypeReadComponent],
    exports: [ProcedureTypeComponent]
})
export class ProcedureTypeModule {
}
