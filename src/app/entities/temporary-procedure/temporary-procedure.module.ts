import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { TemporaryProcedureRoutingModule } from './temporary-procedure-routing.module';
import { TemporaryProcedureComponent} from './temporary-procedure.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { TemporaryProcedureCreateComponent } from './temporary-procedure-create/temporary-procedure-create.component';
import { TemporaryProcedureReadComponent } from './temporary-procedure-read/temporary-procedure-read.component';

@NgModule({
    imports: [
        CommonModule,
        TemporaryProcedureRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [TemporaryProcedureComponent, TemporaryProcedureCreateComponent, TemporaryProcedureReadComponent],
    exports: [TemporaryProcedureComponent]
})
export class TemporaryProcedureModule {
}
