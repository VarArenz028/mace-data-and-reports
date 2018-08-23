import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { TableModule} from 'primeng/table';

import { DoctorTypeReadComponent} from './doctor-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        FormsModule,
        TableModule
    ],
    declarations: [ DoctorTypeReadComponent],
    exports: [ DoctorTypeReadComponent]

})
export class DoctorTypeReadModule {
}
