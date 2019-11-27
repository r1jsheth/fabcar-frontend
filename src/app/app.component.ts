import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './model/car.model';
import { Record } from './model/record.model';
import { CarDTO } from './model/carDTO.model';
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
	newCarIdx: string;
	newCompany: string;
	newModel: string;
	newColour: string;
	newOwner: string;
	ownerNewName: string;
	ownerCarIdx: string;

	toggleString(){
		if (this.httpsString == 'http://localhost:8911') {
			this.httpsString = 'https://4gvgjptrph.execute-api.us-east-1.amazonaws.com/test';
		}
		else{
			this.httpsString = 'http://localhost:8911';
		}
		this.cars$ = [];
		console.log(this.httpsString);
	}



	constructor(private dataService: DataService){ }

	getAllCars(){
		return this.dataService.getAllCars('https://hwm0rmlxqe.execute-api.us-east-1.amazonaws.com/development/queryall')
			.subscribe(data => this.cars$ = data);
	}

	ngOnInit(){
		// return this.dataService.getAllCars().
		// 	subscribe(data => this.cars$ = data);
	}

	getCarByIndex(idx: string){
		return this.dataService.getCarByIndex('https://hwm0rmlxqe.execute-api.us-east-1.amazonaws.com/development/getcar?car='+idx)
			.subscribe(data => this.currentCar$ = data);
	}

	postCar(){
		let newCar = new CarDTO();
		newCar.carid = this.newCarIdx;
		newCar.model = this.newModel;
		newCar.make = this.newCompany;
		newCar.colour = this.newColour;
		newCar.owner = this.newOwner;
		console.log(newCar);
		let okk = this.dataService.postcar('https://hwm0rmlxqe.execute-api.us-east-1.amazonaws.com/development/addcar', newCar);
		
	}
}
