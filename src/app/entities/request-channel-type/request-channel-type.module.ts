import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RequestChannelTypeRoutingModule } from './request-channel-type-routing.module';
import { RequestChannelTypeComponent} from './request-channel-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { RequestChannelTypeCreateComponent } from './request-channel-type-create/request-channel-type-create.component';
import { RequestChannelTypeReadComponent } from './request-channel-type-read/request-channel-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        RequestChannelTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [RequestChannelTypeComponent, RequestChannelTypeCreateComponent, RequestChannelTypeReadComponent],
    exports: [RequestChannelTypeComponent]
})
export class RequestChannelTypeModule {
}
