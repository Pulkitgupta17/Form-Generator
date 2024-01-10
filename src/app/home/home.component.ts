import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'form-builder';
  showCodeArea: boolean = false;
  constructor(private dataServices: ServicesService) {}
  ngOnInit() {
    this.dataServices.showCodeArea.subscribe((res) => {
      this.showCodeArea = res;
    });
  }
}
