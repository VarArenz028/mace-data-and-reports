import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { OtherServicesRoutingModule } from './other-services-routing.module';
import { OtherServicesComponent} from './other-services.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { OtherServicesCreateComponent } from './other-services-create/other-services-create.component';
import { OtherServicesReadComponent } from './other-services-read/other-services-read.component';

@NgModule({
    imports: [
        CommonModule,
        OtherServicesRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [OtherServicesComponent, OtherServicesCreateComponent, OtherServicesReadComponent],
    exports: [OtherServicesComponent]
})
export class OtherServicesModule {
}
