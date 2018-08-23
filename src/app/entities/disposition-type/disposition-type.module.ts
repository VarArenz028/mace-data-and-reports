import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DispositionTypeRoutingModule } from './disposition-type-routing.module';
import { DispositionTypeComponent } from './disposition-type.component';

import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DispositionTypeCreateComponent } from './disposition-type-create/disposition-type-create.component';
import { DispositionTypeReadComponent } from './disposition-type-read/disposition-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        DispositionTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [DispositionTypeComponent, DispositionTypeCreateComponent, DispositionTypeReadComponent],
    exports: [DispositionTypeComponent]
})
export class DispositionTypeModule {
}
