import { modalRef } from '../modalService/modalRef';
import { DIALOG_DATA, dialogData, ModalRef } from '../modalService/modalTokens';
import {Component, Inject } from '@angular/core';

@Component({
  selector: 'app-confirmation-sample',
  templateUrl: './confirmation-sample.component.html',
  styleUrls: ['./confirmation-sample.component.scss'],
})
export class ConfirmationSampleComponent{
  constructor(
    @Inject(DIALOG_DATA) public data: dialogData,
    @Inject(modalRef) public modal: ModalRef,
  ) { }

  close() {
    this.modal.value.close();
  }
}
