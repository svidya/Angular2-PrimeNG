import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
//import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/toPromise';
import {Car} from './car';

@Injectable()
export class CarService{

constructor(private http: Http){

}

getCarsSmall(){
    return this.http.get('./cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => { return data; });
}

}
