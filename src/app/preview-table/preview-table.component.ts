import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-preview-table',
  templateUrl: './preview-table.component.html',
  styleUrl: './preview-table.component.css',
})
export class PreviewTableComponent implements OnInit, OnChanges {
  formData: any[] = [];
  constructor(public dataServices: ServicesService) {}
  ngOnInit(): void {
    this.dataServices.getValue().subscribe((res) => {
      this.formData = res;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.dataServices);
  }

  // formEntries = this.dataServices.formData;
  displayedColumns: string[] = [
    'fieldName',
    'fieldType',
    'isRequired',
    'options',
    'actions',
  ];
  // dataSource = this.formEntries;
  dataSource = this.formData;

  deleteRow(element: any) {
    const index = this.formData.indexOf(element);
    if (index !== -1) {
      this.formData.splice(index, 1);
    }
  }
}
