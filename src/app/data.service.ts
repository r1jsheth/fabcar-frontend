import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './model/car.model';
import { Record } from './model/record.model';


@Injectable({
	providedIn: 'root'
})
export class DataService {
	// IP_ADDRESS = 'https://54.224.232.106';
	// PORT_NUMBER = '8080';
	// apiURL = this.IP_ADDRESS + ':' + this.PORT_NUMBER + '/api';
	
	constructor(private _http: HttpClient) { }

	getAllCars(apiURL){
		// return this._http.get<Car[]>(apiURL + '/api/queryallcars');
		return this._http.get<Car[]>(apiURL);
	}

	getCarByIndex(apiURL,idx: string){
		// return this._http.get<Record>(apiURL + '/api/query/' + idx);
		return this._http.get<Record>(apiURL + '/' + idx);
	}

}
