import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Car } from './model/car.model';
import { Record } from './model/record.model';
import { CarDTO } from './model/carDTO.model';


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

	getCarByIndex(apiURL){
		// return this._http.get<Record>(apiURL + '/api/query/' + idx);
		return this._http.get<Record>(apiURL);
	}
	

	postcar(apiURL:string, car: CarDTO ){
		// console.log(apiURL + '/api/addcar');
		
		// this._http.post(apiURL + '/api/addcar', car).subscribe(

		return this._http.post(apiURL, car);
	}

	GETchangeCarOwner(apiURL : string, carIdx: string, owner : string){

		let cur = apiURL + '?carid=' + carIdx + '&owner=' + owner;
		console.log(cur);
		return this._http.get<String>(cur);
		

	}

}
