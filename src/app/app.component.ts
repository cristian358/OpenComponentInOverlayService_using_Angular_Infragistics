import { Component } from '@angular/core';
import { ModalService } from './modalService/Modal.service';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { ConfirmationSampleComponent } from './confirmation-sample/confirmation-sample.component';


import { Inject, OnDestroy } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular';
import { modalRef } from './modalService/modalRef';
import { ModalRef } from './modalService/modalTokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title = 'Test';
  constructor(private dialog: ModalService,
    @Inject(modalRef) private modalReff: ModalRef,
    @Inject(IgxOverlayService) public overlayService: IgxOverlayService
              ) {}
  async openFormSample() {
    // Open component in modal service call
    const ModalRef =  this.dialog.open(FormSampleComponent, { data: 'hello from app_component' });
    ModalRef.closed().subscribe(() => {
      // Subscription when modal is closed
      console.log('Modal form fclosed!');
    });
  }

  openConfirmationSample() {
    // Open component in modal service call
    const ModalRef = this.dialog.open(ConfirmationSampleComponent, { data: 'Do you want to submit this form' });
    ModalRef.closed().subscribe(() => {
      // Subscription when modal is closed
      console.log('Modal confirmation closed!');
    });
  }
}

