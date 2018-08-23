import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DoctorTypeRoutingModule } from './doctor-type-routing.module';
import { DoctorTypeComponent} from './doctor-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DoctorTypeCreateComponent } from './doctor-type-create/doctor-type-create.component';
import { DoctorTypeReadModule } from './doctor-type-read/doctor-type-read.module';


@NgModule({
    imports: [
        CommonModule,
        DoctorTypeRoutingModule,
        FormsModule,
        PageHeaderModule,
        DoctorTypeReadModule
    ],
    declarations: [DoctorTypeComponent, DoctorTypeCreateComponent],
    exports: [DoctorTypeComponent, DoctorTypeCreateComponent]
})
export class DoctorTypeModule {
}
