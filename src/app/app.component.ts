import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // title = 'form-builder';
  // showCodeArea: boolean = false;
  // constructor(private dataServices: ServicesService) {}
  ngOnInit() {
    // this.dataServices.showCodeArea.subscribe((res) => {
    //   this.showCodeArea = res;
    // });
  }
}
