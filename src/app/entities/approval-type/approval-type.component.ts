import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { PageHeaderService} from '../../shared/page-header/page-header.service';
import { DialogConfirmationYesNoComponent} from '../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-approval-type',
  templateUrl: './approval-type.component.html',
  styleUrls: ['./approval-type.component.css'],
  animations: [routerTransition()]
})
export class ApprovalTypeComponent implements OnInit {

  entityName: string = 'Approval Type';
  isFirstLoad: boolean = true;
  isCreateData: boolean;
  isReadData: boolean;
  isCancelCreateData: boolean;
  isUpdateData: boolean;
  updateDataId: number;

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

}
