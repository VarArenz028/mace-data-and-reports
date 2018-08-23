import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TableModule} from 'primeng/table';
//import { ButtonModule} from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,        
        FormsModule, 
        //ButtonModule,       
        TableModule
    ],
    declarations: [],
    exports: []
})
export class EntitiesModule {
}
