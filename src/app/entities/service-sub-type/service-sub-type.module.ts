import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ServiceSubTypeRoutingModule } from './service-sub-type-routing.module';
import { ServiceSubTypeComponent} from './service-sub-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { ServiceSubTypeCreateComponent } from './service-sub-type-create/service-sub-type-create.component';
import { ServiceSubTypeReadComponent } from './service-sub-type-read/service-sub-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        ServiceSubTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [ServiceSubTypeComponent, ServiceSubTypeCreateComponent, ServiceSubTypeReadComponent],
    exports: [ServiceSubTypeComponent]
})
export class ServiceSubTypeModule {
}
