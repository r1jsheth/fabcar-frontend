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

	constructor(private dataService: DataService){ }

	check(){
		console.log(this.cars$);
	}
	
	ngOnInit(){
		return this.dataService.getAllCars().
			subscribe(data => this.cars$ = data);
	}

}
