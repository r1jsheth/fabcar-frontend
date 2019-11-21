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

	constructor(private dataService: DataService){ }

	getAllCars(){
		return this.dataService.getAllCars()
			.subscribe(data => this.cars$ = data);
	}

	ngOnInit(){
		// return this.dataService.getAllCars().
		// 	subscribe(data => this.cars$ = data);
	}

	getCarByIndex(idx: string){
		if(idx !== undefined && idx.length >= 4){
			return this.dataService.getCarByIndex(idx)
				.subscribe(data => this.currentCar$ = data);
		}
	}
}
