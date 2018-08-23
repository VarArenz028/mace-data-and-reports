import { Component, OnInit, Input } from '@angular/core';

import { DoctorTypeService} from '../doctor-type.service';
import { DialogConfirmationYesNoComponent } from '../../../shared/dialog-confirmation-yes-no/dialog-confirmation-yes-no.component';
import { DialogInformationComponent } from '../../../shared/dialog-information/dialog-information.component';

@Component({
  selector: 'app-doctor-type-read',
  templateUrl: './doctor-type-read.component.html',
  styleUrls: ['./doctor-type-read.component.css']
})
export class DoctorTypeReadComponent implements OnInit {

  @Input() entityName: string;

  myCols: any[];
  myData: Array<any>;
  isCollapsed: boolean = true;
  myDocTypeId: number;


  constructor(private doctorTypeService : DoctorTypeService, private dialogConfirmationYesNoComponent: DialogConfirmationYesNoComponent,
              private dialogInformation: DialogInformationComponent ) { }

  ngOnInit() {

      this.readData();

  }

  readData()  {
      this.myCols = [
        { field : 'docTypeId', header: 'Doctor-type Id'},
        { field : 'docTypeCode', header: 'Doctor-type Code'},
        { field : 'docTypeDesc', header: 'Doctor-type Description'},
      ];

      this.doctorTypeService.read()
        .subscribe(res => {
          this.myData = res.doctorList;
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
            this.doctorTypeService.delete(prmId)
              .subscribe(res => {
                //record successfully deleted.
                //delete the record from display
                this.myData = this.myData.filter(myData => myData.docTypeId != prmId)

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

    CollapseTableRow(prmId: number){
      this.myDocTypeId = prmId;

    };

}
