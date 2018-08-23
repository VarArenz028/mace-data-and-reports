import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { StatusTypeRoutingModule } from './status-type-routing.module';
import { StatusTypeComponent} from './status-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { StatusTypeCreateComponent } from './status-type-create/status-type-create.component';
import { StatusTypeReadComponent } from './status-type-read/status-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        StatusTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [StatusTypeComponent, StatusTypeCreateComponent, StatusTypeReadComponent],
    exports: [StatusTypeComponent]
})
export class StatusTypeModule {
}
