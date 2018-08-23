import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DiagnosisCaseTypeRoutingModule } from './diagnosis-case-type-routing.module';
import { DiagnosisCaseTypeComponent} from './diagnosis-case-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DiagnosisCaseTypeCreateComponent } from './diagnosis-case-type-create/diagnosis-case-type-create.component';
import { DignosisCaseTypeReadComponent } from './dignosis-case-type-read/dignosis-case-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        DiagnosisCaseTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [DiagnosisCaseTypeComponent, DiagnosisCaseTypeCreateComponent, DignosisCaseTypeReadComponent],
    exports: [DiagnosisCaseTypeComponent]
})
export class DiagnosisCaseTypeModule {
}
