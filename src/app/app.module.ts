import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { ConfirmationSampleComponent } from './confirmation-sample/confirmation-sample.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import{DIALOG_DATA,dialogData, ModalRef} from './modalService/modalTokens';

import { 
	IgxButtonModule,
	IgxDialogModule,
	IgxRippleModule,
	IgxIconModule,
	IgxInputGroupModule,
  IgxOverlayService,
  IgxCardModule
 } from "igniteui-angular";
import { modalRef } from './modalService/modalRef';

@NgModule({
  declarations: [
    FormSampleComponent,
    ConfirmationSampleComponent
  ],
  imports: [
    BrowserModule, 
    IgxCardModule,
    FormsModule, 
    OverlayModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule
  ],
  providers: [
    IgxOverlayService,
    {provide: DIALOG_DATA, useClass: dialogData},
    { provide: modalRef, useClass: ModalRef }
  ],
entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
