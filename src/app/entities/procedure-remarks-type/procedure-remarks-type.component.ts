import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { PageHeaderService} from '../../shared/page-header/page-header.service';
import { DialogConfirmationYesNoComponent} from '../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';

@Component({
  selector: 'app-procedure-remarks-type',
  templateUrl: './procedure-remarks-type.component.html',
  styleUrls: ['./procedure-remarks-type.component.css'],
  animations: [routerTransition()]
})
export class ProcedureRemarksTypeComponent implements OnInit {

  isFirstLoad: boolean = true;
  isCreateData: boolean;
  isReadData: boolean;
  isCancelCreateData: boolean;
  isUpdateData: boolean;
  updateDataId: number;
  entityName: string = "Procedure Remarks Type";

  constructor(private pageHeaderService: PageHeaderService,
    private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent) { }

  ngOnInit() {
     this.pageHeaderService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option.toUpperCase() === 'SHOW-CREATE-FORM') {              
        this.createData();
      }            
      this.entityName = res.value;
    });    
  }

  createData(){
    this.isCreateData = true;
    this.isReadData = !this.isCreateData;
  }

  delete(prmId){
    this.dialogConfirmationYesNoComponent.Open("Confirmation", "Are you sure you need to delete selected record (" + prmId + ") now?")
      .then((result) => {        
        if(`${result}`.toString().toLocaleUpperCase() == "YES") {
          this.isReadData = true;
          this.isCreateData = !this.isReadData;
        }
      });    
  }

  update(prmId){
    this.updateDataId = prmId;
    this.isUpdateData = true;
    this.createData();
  }

  getChildNotification(prmEvent) {      
    switch(prmEvent.Message.toUpperCase()) { 
      case "CANCEL": { 
          this.isCancelCreateData = true;
          this.isReadData = this.isCancelCreateData;
          this.isCreateData = !this.isCancelCreateData;
          this.isUpdateData = !this.isCancelCreateData;
          break; 
      } 
      case "SUBMIT": { 
          this.isReadData = true;
          this.isCreateData = !this.isReadData;
          this.isUpdateData = !this.isReadData;
          break; 
      } 
      default: { 
          //statements; 
          break; 
      } 
    }                 
  }

  onError(prmErrorMessage){
    console.log("Error encountered > " + prmErrorMessage);
  }

}
