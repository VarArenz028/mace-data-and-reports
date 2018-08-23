import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ApprovalTypeRoutingModule } from './approval-type-routing.module';
import { ApprovalTypeComponent} from './approval-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ApprovalTypeCreateComponent } from './approval-type-create/approval-type-create.component';
import { ApprovalTypeReadComponent } from './approval-type-read/approval-type-read.component';


@NgModule({
    imports: [
        CommonModule,
        ApprovalTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ApprovalTypeComponent, ApprovalTypeCreateComponent, ApprovalTypeReadComponent],
    exports: [ApprovalTypeComponent]
})
export class ApprovalTypeModule {
}
