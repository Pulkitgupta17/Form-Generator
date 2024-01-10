import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrl: './code-generator.component.css',
})
export class CodeGeneratorComponent implements OnInit {
  formData = this.dataService.tempFormData;
  actualCode: string = '';
  generatedCode: string = '';
  constructor(public dataService: ServicesService, private router: Router) {}
  ngOnInit(): void {
    this.generateCode();
    this.actualCode = this.generatedCode.replace('\n', '');
    this.dataService.formCode = this.actualCode;
  }

  generateCode() {
    // this.generatedCode =
    //   '\n<style>\n' +
    //   'input,\nselect {\n' +
    //   'width: 100%;\npadding: 12px 20px;\n' +
    //   'margin: 8px 0;\ndisplay: inline-block;\n' +
    //   'border: 1px solid #ccc;\nborder-radius: 4px;\n' +
    //   'box-sizing: border-box;\n}\n\n' +
    //   'input[type="submit"] {\nwidth: 100%;\n' +
    //   'background-color: #4caf50;\ncolor: white;\n' +
    //   'padding: 14px 20px;\nmargin: 8px 0;\n' +
    //   'border: none;\nborder-radius: 4px;\ncursor: pointer;\n}\n\n' +
    //   'input[type="submit"]:hover {\nbackground-color: #45a049;\n}\n\n' +
    //   'div {\nborder-radius: 5px;\nbackground-color: #f2f2f2;\n' +
    //   'padding: 20px;\n}\n</style>\n<body>\n<div>\n' +
    //   '</style>\n<body>\n<div>\n<form>\n';
    this.generatedCode = '<form>\n';
    this.formData.forEach((field) => {
      this.generatedCode += `  <label>${field.fieldName}`;
      if (field.isRequired) {
        this.generatedCode += `<span style="color: red;">*</span>: </label>\n`;
      } else {
        this.generatedCode += ' : </label>\n';
      }
      if (field.fieldType === 'select') {
        this.generatedCode += `  <select `;
        if (field.isRequired) {
          this.generatedCode += `required `;
        }
        this.generatedCode += '>\n';
        field.options.forEach((option: string) => {
          this.generatedCode += `    <option>${option}</option>\n`;
        });
        this.generatedCode += '  </select>\n';
      } else {
        this.generatedCode += `  <input type="${field.fieldType}" `;
        if (field.isRequired) {
          this.generatedCode += `required `;
        }
        this.generatedCode += '/>\n';
      }
      this.generatedCode += '<br> \n';
    });
    this.generatedCode += `  <input type="submit" value="Submit"/>\n`;
    this.generatedCode += '</form>';
  }

  copyToClipboard() {
    navigator.clipboard
      .writeText(this.generatedCode)
      .then(() => {
        console.log('Code copied to clipboard');
      })
      .catch((err) => {
        console.error('Unable to copy to clipboard', err);
      });
  }

  navigateToViewForm() {
    this.router.navigate(['/viewForm']);
  }
}
