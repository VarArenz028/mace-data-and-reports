import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { OtherInformationTypeRoutingModule } from './other-information-type-routing.module';
import { OtherInformationTypeComponent} from './other-information-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { OtherInformationTypeCreateComponent } from './other-information-type-create/other-information-type-create.component';
import { OtherInformationTypeReadComponent } from './other-information-type-read/other-information-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        OtherInformationTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [OtherInformationTypeComponent, OtherInformationTypeCreateComponent, OtherInformationTypeReadComponent],
    exports: [OtherInformationTypeComponent]
})
export class OtherInformationTypeModule {
}
