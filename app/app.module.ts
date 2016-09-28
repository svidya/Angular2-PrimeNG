import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {DataTableModule} from 'primeng/primeng';


import { AppComponent }  from './app.component';
import {DataTableDemo} from './datatable-demo';
import {CarService} from './car.service';


@NgModule({
  imports: [ 
  BrowserModule,
  HttpModule,
  FormsModule,
  DataTableModule ],
  declarations: [ 
    AppComponent,
    DataTableDemo 
    ],
    providers:[
      CarService
    ],
  bootstrap: [ 
    AppComponent
     ]
})
export class AppModule { }
