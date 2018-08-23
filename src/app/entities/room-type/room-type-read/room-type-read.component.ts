import { Component, OnInit, Input } from '@angular/core';
import { RoomTypeService } from '../room-type.service';
import { DialogConfirmationYesNoComponent } from '../../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';
import { DialogInformationComponent } from '../../../shared/dialog-information/dialog-information.component';

@Component({
  selector: 'app-room-type-read',
  templateUrl: './room-type-read.component.html',
  styleUrls: ['./room-type-read.component.css']
})
export class RoomTypeReadComponent implements OnInit {
  @Input() entityName: string;
  myCols: any[];  
  myData: Array<any>;

  constructor(private roomTypeService: RoomTypeService,
    private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent,
    private dialogInformation: DialogInformationComponent) { }

  ngOnInit() {
    this.readData();
  }

  readData() {        
    this.myCols = [
          { field: 'planCode', header: 'Plan Code' },
          { field: 'planDesc', header: 'Plan Description' },
          { field: 'rateAmount', header: 'Rate Amount' },
          { field: 'ruvMultiplier', header: 'RUV Multiplier' }
        ];
        
    this.roomTypeService.read()
      .subscribe(res => {                           
        this.myData = res.roomTypeList;                 
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
         
        }
      });    
  }

}
