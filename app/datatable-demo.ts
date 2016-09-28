import {Component,OnInit} from '@angular/core';

import {Car} from  './car';
import {CarService} from './car.service';


@Component({
    selector:'datatable-demo',
    templateUrl:'app/datatable-demo.html'
   
})

export class DataTableDemo implements OnInit{

    cars:Car[];
    items: MenuItem[];
    selectedCar:Car;


    constructor(private carservice :CarService)
    {

    }

    ngOnInit(){
        this.carservice.getCarsSmall().then(cars=>this.cars=cars);

        this.items = [
            {label:'View', command:(event:any)=>this.viewCar(this.selectedCar)},
            {label:'View', command:(event:any)=>this.deleteCar(this.selectedCar)}
        ];
    }

    viewCar(car:Car)
    {
        

    }

    deleteCar(car:Car)
    {

    }
}

export class MenuItem{
    label:any;
    command:any;
}

