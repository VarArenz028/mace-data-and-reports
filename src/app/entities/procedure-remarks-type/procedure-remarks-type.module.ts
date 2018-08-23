import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ProcedureRemarksTypeRoutingModule } from './procedure-remarks-type-routing.module';
import { ProcedureRemarksTypeComponent} from './procedure-remarks-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ProcedureRemarksTypeCreateComponent } from './procedure-remarks-type-create/procedure-remarks-type-create.component';
import { ProcedureRemarksTypeReadComponent } from './procedure-remarks-type-read/procedure-remarks-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        ProcedureRemarksTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ProcedureRemarksTypeComponent, ProcedureRemarksTypeCreateComponent, ProcedureRemarksTypeReadComponent],
    exports: [ProcedureRemarksTypeComponent]
})
export class ProcedureRemarksTypeModule {
}
