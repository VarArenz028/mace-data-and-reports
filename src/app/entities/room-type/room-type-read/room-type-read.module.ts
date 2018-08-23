import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TableModule} from 'primeng/table';

import { RoomTypeReadComponent } from '../room-type-read/room-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,    
        TableModule
    ],
    declarations: [ RoomTypeReadComponent],
    exports: [ RoomTypeReadComponent]    

})
export class RoomTypeReadModule {
}
