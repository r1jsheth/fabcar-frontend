import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './model/car.model';
import { Record } from './model/record.model';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	
	cars$: Car[];
	currentCar$: Record;
	carIdx: string;
	httpsString: string;


	toggleString(){
		if (this.httpsString == 'http://localhost:8911') {
			this.httpsString = 'http://184.73.99.180:8080';
		}
		else{
			this.httpsString = 'http://localhost:8911';
		}
		this.cars$ = [];
		console.log(this.httpsString);
	}


	constructor(private dataService: DataService){ }

	getAllCars(){
		return this.dataService.getAllCars(this.httpsString)
			.subscribe(data => this.cars$ = data);
	}

	ngOnInit(){
		// return this.dataService.getAllCars().
		// 	subscribe(data => this.cars$ = data);
	}

	getCarByIndex(idx: string){
		if(idx !== undefined && idx.length >= 4){
			return this.dataService.getCarByIndex(this.httpsString, idx)
				.subscribe(data => this.currentCar$ = data);
		}
	}
}
