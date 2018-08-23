import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { InquiryTypeRoutingModule } from './inquiry-type-routing.module';
import { InquiryTypeComponent} from './inquiry-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { InquiryTypeCreateComponent } from './inquiry-type-create/inquiry-type-create.component';
import { InquiryTypeReadComponent } from './inquiry-type-read/inquiry-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        InquiryTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [InquiryTypeComponent, InquiryTypeCreateComponent, InquiryTypeReadComponent],
    exports: [InquiryTypeComponent]
})
export class InquiryTypeModule {
}
