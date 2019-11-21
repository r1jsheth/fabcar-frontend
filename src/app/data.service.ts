import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './model/car.model';
import { Record } from './model/record.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	IP_ADDRESS = 'http://54.224.232.106';
	PORT_NUMBER = '8080';
	apiURL = this.IP_ADDRESS + ':' + this.PORT_NUMBER + '/api';
	
	
	constructor(private _http: HttpClient) { }

	getAllCars(){
		return this._http.get<Car[]>(this.apiURL + '/queryallcars');
	}

	getCarByIndex(idx: string){
		return this._http.get<Record>(this.apiURL + '/query/' + idx);
	}

}
