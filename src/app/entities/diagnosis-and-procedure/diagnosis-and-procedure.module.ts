import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DiagnosisAndProcedureRoutingModule } from './diagnosis-and-procedure-routing.module';
import { DiagnosisAndProcedureComponent} from './diagnosis-and-procedure.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DiagnosisAndProcedureCreateComponent } from './diagnosis-and-procedure-create/diagnosis-and-procedure-create.component';
import { DiagnosisAndProcedureReadComponent } from './diagnosis-and-procedure-read/diagnosis-and-procedure-read.component';

@NgModule({
    imports: [
        CommonModule,
        DiagnosisAndProcedureRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [DiagnosisAndProcedureComponent, DiagnosisAndProcedureCreateComponent, DiagnosisAndProcedureReadComponent],
    exports: [DiagnosisAndProcedureComponent]
})
export class DiagnosisAndProcedureModule {
}
