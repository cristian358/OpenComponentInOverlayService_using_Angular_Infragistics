import { modalRef } from '../modalService/modalRef';
import { DIALOG_DATA, dialogData, ModalRef } from '../modalService/modalTokens';
import {Component, Inject } from '@angular/core';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss'],
  //providers:[ModalService ]
})
export class FormSampleComponent{
  constructor(
    @Inject(DIALOG_DATA) public data: dialogData,
    @Inject(modalRef) public modal: ModalRef,
    ) {}
    ngOnInit() {
    }

  close() {
   this.modal.value.close();
  }
}
