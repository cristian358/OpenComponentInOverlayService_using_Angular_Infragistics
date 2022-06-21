import { IgxOverlayService } from 'igniteui-angular';
import { Subject, Observable } from 'rxjs';

  // Reference to the modal.

export class modalRef {
  public closedSubject = new Subject<any>();
 
  constructor( public overlayId: string,
   public overlayService: IgxOverlayService ) {}

  //  Closes modal

  public close(result?: any) {
    this.overlayService.detach(this.overlayId);
    this.closedSubject.next(result);
    this.closedSubject.complete();
  }

    // An Observable when the modal has closed

  public closed(): Observable<any> {
    return this.closedSubject.asObservable();
  }
}
