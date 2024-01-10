import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { InputFormComponent } from './input-form/input-form.component';
import { PreviewTableComponent } from './preview-table/preview-table.component';
import { MatTableModule } from '@angular/material/table';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { HomeComponent } from './home/home.component';
import { ViewFormComponent } from './view-form/view-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFormComponent,
    PreviewTableComponent,
    CodeGeneratorComponent,
    HomeComponent,
    ViewFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule,
    MatTableModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
