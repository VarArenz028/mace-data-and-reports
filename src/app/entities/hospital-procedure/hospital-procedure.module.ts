import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HospitalProcedureRoutingModule } from './hospital-procedure-routing.module';
import { HospitalProcedureComponent} from './hospital-procedure.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { HospitalProcedureCreateComponent } from './hospital-procedure-create/hospital-procedure-create.component';
import { HospitalProcedureReadComponent } from './hospital-procedure-read/hospital-procedure-read.component';

@NgModule({
    imports: [
        CommonModule,
        HospitalProcedureRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [HospitalProcedureComponent, HospitalProcedureCreateComponent, HospitalProcedureReadComponent],
    exports: [HospitalProcedureComponent]
})
export class HospitalProcedureModule {
}
