import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { PageHeaderService} from '../../shared/page-header/page-header.service';
import { DialogConfirmationYesNoComponent} from '../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';
import { Procedure } from '../../shared/model/procedure';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css'],
  animations: [routerTransition()]
})
export class ProcedureComponent implements OnInit {

  isCreateData: boolean;
  isReadData: boolean;  
  procedure: Procedure = null;
  entityName: string = "Procedure";  
  myDataSlice: string = 'ALL';

  constructor(private pageHeaderService: PageHeaderService,
    private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent) { }

  ngOnInit() {
     this.pageHeaderService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option.toUpperCase() === 'SHOW-CREATE-FORM') {              
        this.createData();
      } else if (res.hasOwnProperty('option') && res.option.toUpperCase() === 'READ-DATA') {                                
        this.readData(this.myDataSlice);      
      }            
      this.entityName = res.value;
    });    
  }

  createData(){
    this.procedure = null;
    this.isCreateData = true;
    this.isReadData = !this.isCreateData;
  }

  readData(prmDataSlice: string){        
    this.isReadData = true;
    this.isCreateData = !this.isReadData;     
    this.myDataSlice = prmDataSlice;    
  }    

  readDataActive(){        
    this.isReadData = true;
    this.isCreateData = !this.isReadData;     
  }    

  readDataInactive(){        
    this.isReadData = true;
    this.isCreateData = !this.isReadData;     
  }    



  getChildNotification(prmEvent) {      
    switch(prmEvent.Message.toUpperCase()) { 
      case "CANCEL": {           
          this.isReadData = true;
          this.isCreateData = !this.isReadData;      
          break; 
      } 
      case "CLOSE-PAGE": {           
        this.isReadData = false;
        this.isCreateData = false;
        break; 
    } 
      case "SUBMIT-SUCCESS": { 
          this.isReadData = true;
          this.isCreateData = !this.isReadData;          
          break; 
      } 
      case "UPDATE-DATA": {
        this.procedure = prmEvent.UpdateData;        
        this.isCreateData = true;
        this.isReadData = !this.isCreateData;
        break;
      }
      default: { 
          //statements; 
          break; 
      } 
    }                 
  } 
}
