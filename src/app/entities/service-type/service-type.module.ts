import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ServiceTypeRoutingModule } from './service-type-routing.module';
import { ServiceTypeComponent} from './service-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ServiceTypeCreateComponent } from './service-type-create/service-type-create.component';
import { ServiceTypeReadComponent } from './service-type-read/service-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        ServiceTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ServiceTypeComponent, ServiceTypeCreateComponent, ServiceTypeReadComponent],
    exports: [ServiceTypeComponent]
})
export class ServiceTypeModule {
}
