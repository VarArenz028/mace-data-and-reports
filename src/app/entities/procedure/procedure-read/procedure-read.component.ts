import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogConfirmationYesNoComponent } from '../../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';
import { DialogInformationComponent } from '../../../shared/dialog-information/dialog-information.component';
import { Procedure } from '../../../shared/model/procedure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure-read',
  templateUrl: './procedure-read.component.html',
  styleUrls: ['./procedure-read.component.css']
})
export class ProcedureReadComponent implements OnInit {
  @Input() entityName: string;
  @Input() dataSlice: string;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  myCols: any[];
  myData: Array<any>;
  isCollapsed: boolean = true;
  myProcedureId: number;  

  constructor(private router: Router,
    private procedureBLL: Procedure,
    private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent,
    private dialogInformation: DialogInformationComponent) { }

  ngOnInit() {
    this.readData();
  }

  readData() {
    this.myCols = [
          { field: 'procedureId', header: 'Procedure Id' },
          { field: 'procedureCode', header: 'Procedure Code' },
          { field: 'procedureName', header: 'Procedure Name' },          
          { field: 'rate', header: 'Rate' },
          { field: 'ruv', header: 'RUV' },
          { field: 'ruvAmount', header: 'RUV Amount' },          
        ];

    this.procedureBLL.read(this.dataSlice)
    .subscribe(res => {
      this.myData = res.procedureList;
    },
    error => {
      console.log("Encountered error while processing your requests -> " + error);
    },
    () => {
      //
    })   
  }  

  deleteData(prmId){
    this.dialogConfirmationYesNoComponent.Open("Confirmation", "Are you sure you need to delete selected record (" + prmId + ") now?")
      .then((result) => {
        if(`${result}`.toString().toLocaleUpperCase() == "YES") {
          this.procedureBLL.delete(prmId)
            .subscribe(res => {
              //record successfully deleted.
              //delete the record from display
              this.myData = this.myData.filter(myData => myData.procedureId != prmId)
            },
            error => {
              console.log("Encountered error while processing your requests -> " + error);
            },
            () => {
              //
            })
        }
      });
  }  

  updateData(prmData: Procedure){    
    this.notifyParent.emit({Message: 'UPDATE-DATA', UpdateData: prmData});           
  }

  CollapseTableRow(prmId: number){
    this.myProcedureId = prmId;

  };

  closePage(){
    this.notifyParent.emit({Message: 'CLOSE-PAGE'});  
  }
}
