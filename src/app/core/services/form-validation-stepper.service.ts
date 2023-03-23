import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormValidationStepperService {
  forms = [
    new BehaviorSubject<boolean>(false), 
    new BehaviorSubject<boolean>(false), 
    new BehaviorSubject<boolean>(false)
  ];
  constructor() { }
  setFormValid(form: number, isValid: boolean) {
    this.forms[form].next(isValid);
  }

  getFormValid(form: number) {
    return this.forms[form].asObservable();
  }

  public ngOnDestroy(form:number) {
    this.forms[form].complete();
  }
}
