import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TableModule} from 'primeng/table';

import { AdmissionTypeReadComponent} from './admission-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,    
        TableModule
    ],
    declarations: [ AdmissionTypeReadComponent],
    exports: [ AdmissionTypeReadComponent]    

})
export class AdmissionTypeReadModule {
}
