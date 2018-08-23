import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-confirmation-yes-no',
  templateUrl: './dialog-confirmation-yes-no.component.html',
  styleUrls: ['./dialog-confirmation-yes-no.component.css']
})
export class DialogConfirmationYesNoComponent implements OnInit {  

  headerText: string = "this is my header";
  bodyText: string = "this is my body text";

  constructor(public NgbModal: NgbModal,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public Open(prmHeaderText, prmBodyText): Promise<any> {
    const modalRef = this.NgbModal.open(DialogConfirmationYesNoComponent);
    modalRef.componentInstance.headerText = prmHeaderText;
    modalRef.componentInstance.bodyText = prmBodyText;
    return modalRef.result;
  }
}
