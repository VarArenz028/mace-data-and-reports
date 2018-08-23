import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProcedureRoutingModule } from './procedure-routing.module';
import { ProcedureComponent} from './procedure.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ProcedureCreateComponent } from './procedure-create/procedure-create.component';
import { ProcedureReadModule } from './procedure-read/procedure-read.module';
import { Procedure } from '../../shared/model/procedure';

@NgModule({
    imports: [
        CommonModule,
        ProcedureRoutingModule,
        FormsModule,   
        ReactiveFormsModule,     
        PageHeaderModule,
        ProcedureReadModule
    ],
    declarations: [ProcedureComponent, ProcedureCreateComponent],
    exports: [ProcedureComponent, ProcedureCreateComponent],
    providers: [Procedure]
})
export class ProcedureModule {
}
