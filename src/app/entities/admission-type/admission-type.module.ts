import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AdmissionTypeRoutingModule } from './admission-type-routing.module';
import { AdmissionTypeReadModule } from './admission-type-read/admission-type-read.module';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';

import { AdmissionTypeComponent} from './admission-type.component';
import { AdmissionTypeCreateComponent } from './admission-type-create/admission-type-create.component';

@NgModule({
    imports: [
        CommonModule,
        AdmissionTypeRoutingModule,
        FormsModule,
        PageHeaderModule,        
        AdmissionTypeReadModule        
    ],
    declarations: [AdmissionTypeComponent, AdmissionTypeCreateComponent],
    exports: [AdmissionTypeComponent]
})
export class AdmissionTypeModule {
}
