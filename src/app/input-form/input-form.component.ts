import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent implements OnInit {
  formFields: any[] = [];
  form: FormGroup = {} as FormGroup;
  showTable: boolean = false;
  isAddButtonDisabled: boolean = false;
  constructor(private fb: FormBuilder, private dataServices: ServicesService) {}

  ngOnInit() {
    this.form = this.fb.group({
      fieldName: ['', Validators.required],
      fieldType: ['text', Validators.required],
      options: this.fb.array(['', '', '', '']),
      isRequired: false,
    });
  }

  get options() {
    return this.form.get('options') as any;
  }

  addField() {
    this.formFields.push(this.form.value);
    let d = this.formFields.pop();
    if (d?.fieldType != 'select') {
      d.options = ['NA'];
    }
    this.formFields.push(d);
    this.resetForm();

    this.showTable = true;
    this.resetForm();
    this.dataServices.setValue(this.formFields);
    //Trying another way:
    this.dataServices.tempFormData = this.formFields;
  }

  generateForm() {
    console.log('Generated Form:', this.formFields);
    this.resetForm();
    this.dataServices.showCodeArea.next(true);
    this.showTable = false;
    this.isAddButtonDisabled = true;
    this.formFields = [];
  }

  resetForm() {
    this.form.reset({
      fieldName: '',
      fieldType: 'text',
      options: ['', '', '', ''],
      isRequired: false,
    });
  }
}
