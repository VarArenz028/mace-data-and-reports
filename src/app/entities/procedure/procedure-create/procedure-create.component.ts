import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";

import { DialogConfirmationYesNoComponent } from '../../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../../shared/model/user';
//import { ProcedureService } from '../procedure.service';
import { DialogInformationComponent } from '../../../shared/dialog-information/dialog-information.component';
import { Procedure } from '../../../shared/model/procedure';

@Component({
  selector: 'app-procedure-create',
  templateUrl: './procedure-create.component.html',
  styleUrls: ['./procedure-create.component.css']
})
export class ProcedureCreateComponent implements OnInit {
  @Input() entityName: string;      
  @Input() procedureUpdateRecord: Procedure;  //record to be updated
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  
  myFormGroup: FormGroup;

  constructor(private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent,
    private dialogInformationComponent: DialogInformationComponent,    
    private procedureBLL: Procedure,
    private formBuilder: FormBuilder,
    private user: User,
    //private procedureService: ProcedureService
  ) {             
    }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    if(this.procedureUpdateRecord) {      
      this.procedureBLL.procedureId = this.procedureUpdateRecord.procedureId; //meaning its edit
    } else {
      this.procedureBLL.procedureId = null  //making sure it is null upon create
    }

    this.myFormGroup = this.formBuilder.group({
      procedureId: [this.procedureBLL.procedureId, null],
      dataSourceId: ['DATARPTCEN', null],
      procedureName: [this.procedureUpdateRecord ? this.procedureUpdateRecord.procedureName : this.procedureBLL.procedureName, Validators.required],      
      procedureCode: [this.procedureUpdateRecord ? this.procedureUpdateRecord.procedureCode : this.procedureBLL.procedureCode, Validators.required],
      procedureDesc: [this.procedureUpdateRecord ? this.procedureUpdateRecord.procedureDesc : this.procedureBLL.procedureDesc, Validators.required],
      rate: [this.procedureUpdateRecord ? this.procedureUpdateRecord.rate : this.procedureBLL.rate, Validators.required],
      ruv: [this.procedureUpdateRecord ? this.procedureUpdateRecord.ruv : this.procedureBLL.ruv, Validators.maxLength(5)],      
      ruvAmount: [this.procedureUpdateRecord ? this.procedureUpdateRecord.ruvAmount : this.procedureBLL.ruvAmount, null],
      statusId: 1,  //means ACTIVE
      createdBy: this.user.Username,
      updatedBy: [this.procedureUpdateRecord ? this.user.Username : null, null],
    })
  }

  rebuildForm() {
    this.myFormGroup.reset({    
      procedureName: null,
      procedureDesc: null,
      procedureCode: null
    });
  }

  submit(prmData: Procedure){    
    this.dialogConfirmationYesNoComponent.Open("Confirmation", "Are you sure you need to submit your changes now?")
      .then((result) => {        
        if(`${result}`.toString().toLocaleUpperCase() == "YES") {
          try{

            if(this.procedureBLL.procedureId) { //it means edit
              this.submitUpdate(prmData);              
            } else {
              this.submitCreate(prmData);
            }            
          }
          catch(error) {
            this.dialogInformationComponent.Open("Error", error.message);
          }
          
        }
      });    
  }

  submitCreate(prmData: Procedure){
    this.procedureBLL.create(prmData)
      .subscribe(res => {   
        this.dialogInformationComponent.Open("Information", res.responseDesc);
        this.notifyParent.emit({Message: 'SUBMIT-SUCCESS'});           
      },
      error => {              
        this.dialogInformationComponent.Open("Error", error._body);
      },
      () => {
        //
      })              
  }

  submitUpdate(prmData: Procedure){
    this.procedureBLL.update(prmData)
      .subscribe(res => {                           
        this.notifyParent.emit({Message: 'SUBMIT-SUCCESS'});           
      },
      error => {               
        this.dialogInformationComponent.Open("Error", error._body);
      },
      () => {
        //
      })              
  }
}
