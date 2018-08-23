import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ProcedureApprovalTypeRoutingModule } from './procedure-approval-type-routing.module';
import { ProcedureApprovalTypeComponent} from './procedure-approval-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ProcedureApprovalCreateComponent } from './procedure-approval-create/procedure-approval-create.component';
import { ProcedureApprovalReadComponent } from './procedure-approval-read/procedure-approval-read.component';

@NgModule({
    imports: [
        CommonModule,
        ProcedureApprovalTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ProcedureApprovalTypeComponent, ProcedureApprovalCreateComponent, ProcedureApprovalReadComponent],
    exports: [ProcedureApprovalTypeComponent]
})
export class ProcedureApprovalTypeModule {
}
