import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MedicardClinicsRoutingModule } from './medicard-clinics-routing.module';
import { MedicardClinicsComponent} from './medicard-clinics.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { MedicardClinicsCreateComponent } from './medicard-clinics-create/medicard-clinics-create.component';
import { MedicardClinicsReadComponent } from './medicard-clinics-read/medicard-clinics-read.component';

@NgModule({
    imports: [
        CommonModule,
        MedicardClinicsRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [MedicardClinicsComponent, MedicardClinicsCreateComponent, MedicardClinicsReadComponent],
    exports: [MedicardClinicsComponent]
})
export class MedicardClinicsModule {
}
