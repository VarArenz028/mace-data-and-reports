import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DiagnosisTypeRoutingModule } from './diagnosis-type-routing.module';
import { DiagnosisTypeComponent} from './diagnosis-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DiagnosisTypeCreateComponent } from './diagnosis-type-create/diagnosis-type-create.component';
import { DiagnosisTypeReadComponent } from './diagnosis-type-read/diagnosis-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        DiagnosisTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [DiagnosisTypeComponent, DiagnosisTypeCreateComponent, DiagnosisTypeReadComponent],
    exports: [DiagnosisTypeComponent]
})
export class DiagnosisTypeModule {
}
