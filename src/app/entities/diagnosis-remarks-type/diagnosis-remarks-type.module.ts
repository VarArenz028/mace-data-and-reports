import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DiagnosisRemarksTypeRoutingModule } from './diagnosis-remarks-routing.module';
import { DiagnosisRemarksTypeComponent} from './diagnosis-remarks-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DiagnosisRemarksTypeCreateComponent } from './diagnosis-remarks-type-create/diagnosis-remarks-type-create.component';
import { DiagnosisRemarksTypeReadComponent } from './diagnosis-remarks-type-read/diagnosis-remarks-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        DiagnosisRemarksTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [DiagnosisRemarksTypeComponent, DiagnosisRemarksTypeCreateComponent, DiagnosisRemarksTypeReadComponent],
    exports: [DiagnosisRemarksTypeComponent]
})
export class DiagnosisRemarksCaseTypeModule {
}
