import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { InpatientStatusTypeRoutingModule } from './inpatient-status-type-routing.module';
import { InpatientStatusTypeComponent} from './inpatient-status-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { InpatientStatusTypeCreateComponent } from './inpatient-status-type-create/inpatient-status-type-create.component';
import { InpatientStatusTypeReadComponent } from './inpatient-status-type-read/inpatient-status-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        InpatientStatusTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [InpatientStatusTypeComponent, InpatientStatusTypeCreateComponent, InpatientStatusTypeReadComponent],
    exports: [InpatientStatusTypeComponent]
})
export class InpatientStatusTypeModule {
}
