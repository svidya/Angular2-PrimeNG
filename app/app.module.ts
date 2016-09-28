import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { DataTableDemo } from './datatable-demo';
import { DataTableCrud } from './datatable-crud';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    DialogModule,
    ContextMenuModule],
  declarations: [
    AppComponent,
    DataTableDemo,
    DataTableCrud
  ],
  providers: [
    CarService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
