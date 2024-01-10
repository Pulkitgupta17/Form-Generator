import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrl: './view-form.component.css',
})
export class ViewFormComponent implements OnInit {
  actualCode: string = '';
  ngOnInit(): void {}
  sanitizedHTML: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    public dataService: ServicesService
  ) {
    this.actualCode = this.dataService.formCode;
    this.sanitizedHTML = this.sanitizer.bypassSecurityTrustHtml(
      this.actualCode
    );
  }
}
