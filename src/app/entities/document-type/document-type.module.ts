import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { DocumentTypeRoutingModule } from './document-type-routing.module';
import { DocumentTypeComponent} from './document-type.component';
import { PageHeaderModule } from '../../shared/page-header/page-header.module';
import { DocumentTypeCreateComponent } from './document-type-create/document-type-create.component';
import { DocumentTypeReadComponent } from './document-type-read/document-type-read.component';

@NgModule({
    imports: [
        CommonModule,
        DocumentTypeRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [DocumentTypeComponent, DocumentTypeCreateComponent, DocumentTypeReadComponent],
    exports: [DocumentTypeComponent]
})
export class DocumentTypeModule {
}
