import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RoomTypeRoutingModule } from './room-type-routing.module';
import { RoomTypeComponent} from './room-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { RoomTypeCreateComponent } from './room-type-create/room-type-create.component';
import { RoomTypeReadModule} from './room-type-read/room-type-read.module';

@NgModule({
    imports: [
        CommonModule,
        RoomTypeRoutingModule,
        FormsModule,
        PageHeaderModule,
        RoomTypeReadModule
    ],
    declarations: [RoomTypeComponent, RoomTypeCreateComponent],
    exports: [RoomTypeComponent]
})
export class RoomTypeModule {
}
