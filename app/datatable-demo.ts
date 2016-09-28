import {Component,OnInit} from '@angular/core';

import {Car} from  './car';
import {CarService} from './car.service';


@Component({
    selector:'datatable-demo',
    template:`
    <p-dataTable [value]="cars">
    <p-column field="vin" header="Vin"></p-column>
    <p-column field="year" header="Year"></p-column>
    <p-column field="brand" header="Brand"></p-column>
    <p-column field="color" header="Color"></p-column>
</p-dataTable>
    `
})

export class DataTableDemo implements OnInit{

    cars:Car[];

    constructor(private carservice :CarService)
    {

    }

    ngOnInit(){
        this.carservice.getCarsSmall().then(cars=>this.cars=cars);
    }
}

