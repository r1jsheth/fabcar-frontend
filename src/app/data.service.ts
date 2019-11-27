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

		this._http.post(apiURL, car).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",
					val);
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}

	POSTchangeCarOwner(apiURL : string, carIdx: string, owner : string){

		let httpParams = new HttpParams();
		httpParams.set('owner', owner);
		httpParams.set('carIdx', carIdx);
		this._http.get<String>(apiURL, {params: httpParams})
		.subscribe(
			(val) => {
				console.log("GET call successful value returned in body",
					val);
			},
			response => {
				console.log("Some error occured!", response);
			},
			() => {
				console.log("Transaction Successful!");
			});

	}

}
