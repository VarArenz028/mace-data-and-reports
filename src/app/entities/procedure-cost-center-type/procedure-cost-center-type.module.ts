import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ProcedureCostCenterTypeRoutingModule } from './procedure-cost-center-type-routing.module';
import { ProcedureCostCenterTypeComponent} from './procedure-cost-center-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ProcedureCostCenterTypeCreateComponent } from './procedure-cost-center-type-create/procedure-cost-center-type-create.component';
import { ProcedureCostCenterTypeReadComponent } from './procedure-cost-center-type-read/procedure-cost-center-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        ProcedureCostCenterTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ProcedureCostCenterTypeComponent, ProcedureCostCenterTypeCreateComponent, ProcedureCostCenterTypeReadComponent],
    exports: [ProcedureCostCenterTypeComponent]
})
export class ProcedureCostCenterTypeModule {
}
