import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { LoaChecklistTypeRoutingModule } from './loa-checklist-type-routing.module';
import { LoaChecklistTypeComponent} from './loa-checklist-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { LoaCheclistTypeCreateComponent } from './loa-checlist-type-create/loa-checlist-type-create.component';
import { LoaCheclistTypeReadComponent } from './loa-checlist-type-read/loa-checlist-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        LoaChecklistTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [LoaChecklistTypeComponent, LoaCheclistTypeCreateComponent, LoaCheclistTypeReadComponent],
    exports: [LoaChecklistTypeComponent]
})
export class LoaChecklistTypeModule {
}
