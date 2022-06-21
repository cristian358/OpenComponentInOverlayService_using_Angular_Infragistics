import { Inject, Injectable} from '@angular/core';
import { modalRef } from './modalRef';
import { DIALOG_DATA,dialogData, ModalRef } from './modalTokens';

import { IgxOverlayService } from 'igniteui-angular';
// Modal interface data used as input data to send to component
export interface ModalConfig {
  data?: any;
}

@Injectable({
  providedIn: 'root',
})


export class ModalService {
  constructor(
 @Inject(DIALOG_DATA) private dialogData: dialogData,
 @Inject(modalRef) private modalRef: ModalRef,
 @Inject(IgxOverlayService) public overlayService: IgxOverlayService) {}

  open(component: any, config?: ModalConfig){
    //put data into dialogData inject
    this.dialogData.value=config?.data;
    //get overlayId using infragistics OverlayService
    const overlayId = this.overlayService.attach(component);
    //open modal
    this.overlayService.show(overlayId);
    //get reference for modal to be used in other components
    const ModalRef = new modalRef(overlayId,this.overlayService);
    this.modalRef.value=ModalRef;
    return ModalRef;
  }
}
