import {Component,OnInit} from '@angular/core';

import {Car} from  './car';
import {CarService} from './car.service';


@Component({
    selector:'datatable-crud',
    templateUrl:'app/datatable-crud.html'
   
})
export class DataTableCrud implements OnInit{
     displayDialog: boolean;

    car: Car = new PrimeCar();
    
    selectedCar: Car;
    
    newCar: boolean;

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsVerySmall().then(cars => this.cars = cars);
    }
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        if(this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;
        
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event:any) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

class PrimeCar implements Car {
    
    constructor(public vin?:any, public year?:any, public brand?:any, public color?:any) {}
}