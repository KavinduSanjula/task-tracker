import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  formState : boolean = false;
  subject : Subject<any> = new Subject();

  constructor() { }

  onFormToggle() : Observable<boolean> {
    return this.subject.asObservable();
  }

  toggleForm() : void {
    this.formState = ! this.formState;
    this.subject.next(this.formState);
  }
}
