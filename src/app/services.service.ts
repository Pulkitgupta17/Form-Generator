import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}
  formCode: string = '';
  tempFormData: any[] = [];
  showCodeArea = new Subject<boolean>();
  private formData = new BehaviorSubject<any>([
    {
      fieldName: '',
      fieldType: 'text',
      options: ['', '', '', ''],
      isRequired: false,
    },
  ]);

  setValue(value: any[]) {
    this.formData.next(value);
  }

  getValue() {
    return this.formData.asObservable();
  }
}
