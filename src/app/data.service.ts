import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './model/car.model';


@Injectable({
	providedIn: 'root'
})
export class DataService {
	apiURL = 'http://localhost:8911/api';
	
	
	constructor(private _http: HttpClient) { }

	getAllCars(){
		let currentURL = this.apiURL + '/queryallcars';
		return this._http.get<Car[]>(currentURL);
	}
}
