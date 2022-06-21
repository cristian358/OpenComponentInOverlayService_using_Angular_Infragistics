import { InjectionToken } from '@angular/core';
import { modalRef } from './modalRef';
export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');
//dialog data class used for dialog data provider
export class dialogData {
    get value(): string {
        return this._value;
    }
    set value(val: string) {
        this._value = val;
    }
    private _value='';
}
//modalref class used for setting injection modal
export class ModalRef {

    get value(): modalRef {
        return this._value;
    }
    set value(val: modalRef) {
        this._value = val;
    }
   private _value: any;
}