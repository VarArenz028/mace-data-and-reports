import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { User} from './model/user';
import { DialogConfirmationYesNoComponent } from './dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';
import { DialogInformationComponent } from './dialog-information/dialog-information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ DialogConfirmationYesNoComponent, DialogInformationComponent],
  exports: [ DialogConfirmationYesNoComponent, DialogInformationComponent],
  providers: [ DialogConfirmationYesNoComponent, DialogInformationComponent, User],
  entryComponents: [DialogConfirmationYesNoComponent, DialogInformationComponent],  
})
export class SharedModule { }
