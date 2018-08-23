import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LoaIssuanceTypeRoutingModule } from './loa-issuance-type-routing.module';
import { LoaIssuanceTypeComponent} from './loa-issuance-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { LoaIssuanceTypeCreateComponent } from './loa-issuance-type-create/loa-issuance-type-create.component';
import { LoaIssuanceTypeReadComponent } from './loa-issuance-type-read/loa-issuance-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        LoaIssuanceTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [LoaIssuanceTypeComponent, LoaIssuanceTypeCreateComponent, LoaIssuanceTypeReadComponent],
    exports: [LoaIssuanceTypeComponent]
})
export class LoaIssuanceTypeModule {
}
