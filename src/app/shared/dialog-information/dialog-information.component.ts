import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrls: ['./dialog-information.component.css']
})
export class DialogInformationComponent implements OnInit {

  headerText: string = "this is my header";
  bodyText: string = "this is my body text";

  constructor(public NgbModal: NgbModal,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public Open(prmHeaderText, prmBodyText): Promise<any> {
    const modalRef = this.NgbModal.open(DialogInformationComponent);
    modalRef.componentInstance.headerText = prmHeaderText;
    modalRef.componentInstance.bodyText = prmBodyText;
    return modalRef.result;
  }

}
