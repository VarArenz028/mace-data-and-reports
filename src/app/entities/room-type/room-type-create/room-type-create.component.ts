import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";

import { DialogConfirmationYesNoComponent } from '../../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';

@Component({
  selector: 'app-room-type-create',
  templateUrl: './room-type-create.component.html',
  styleUrls: ['./room-type-create.component.css']
})
export class RoomTypeCreateComponent implements OnInit {

  @Input() entityName: string;
  @Input() isUpdateData: boolean;
  @Input() updateDataId: number;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent) { }

  ngOnInit() {
  }

  submit(prmData){
    this.dialogConfirmationYesNoComponent.Open("Confirmation", "Are you sure you need to submit your changes now?")
      .then((result) => {
        if(`${result}`.toString().toLocaleUpperCase() == "YES") {
          this.notifyParent.emit({Message: 'SUBMIT'});
        }
      });
  }

}
