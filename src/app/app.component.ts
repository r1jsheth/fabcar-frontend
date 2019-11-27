import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './model/car.model';
import { Record } from './model/record.model';
import { CarDTO } from './model/carDTO.model';
import { DialogModelSuccess } from "src/shared/dialog/dialog-success/model";
import { DialogSuccessComponent } from "src/shared/dialog/dialog-success/dialog-success.component";
import { MatDialog, MatDialogRef } from "@angular/material";
import { DialogProgressComponent } from 'src/shared/dialog/dialog-progress/dialog-progress.component';
import { DialogErrorComponent } from "src/shared/dialog/dialog-error/dialog-error.component";
import { DialogModelError } from "src/shared/dialog/dialog-error/model";

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



	constructor(private dataService: DataService, public dialog: MatDialog){ }

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
		this.dataService.postcar('https://hwm0rmlxqe.execute-api.us-east-1.amazonaws.com/development/addcar', newCar)
			.subscribe(
				(val) => {
					console.log("POST call successful value returned in body",
						val);
					window.alert("Successful! " + val)
				},
				response => {
					// window.Error("Error in POST" + response);
					this.openError('POST call in error' + response)
					// console.log("POST call in error", response);
				},
				() => {
					console.log("The POST observable is now completed.");
				});
			}
			
		changeCarOwner(){
			console.log("app-comp");
			let ok = this.dataService.GETchangeCarOwner('https://hwm0rmlxqe.execute-api.us-east-1.amazonaws.com/development/changeowner',
			this.ownerCarIdx, this.ownerNewName)
			.subscribe(
				(val) => {
					// window.alert("Successful! New Car inserted! " + val);
					this.openSuccess("Successful! Car owner changed successfully! " + val);
					console.log("Car owner changed successfully!",val);
				},
				response => {
					
					this.openError('POST call in error' + response)
				},
				() => {
					console.log("Transaction Successful!");
		});
		
	}

	mDialogRef: MatDialogRef<DialogProgressComponent, any>;
	openSuccess(response: string) {
		// console.log("in opensuccesssss", response);
		let alert: DialogModelSuccess = new DialogModelSuccess(
			response,
			"",
			null,
			null
		);

		this.mDialogRef = this.dialog.open(DialogSuccessComponent, {
			data: alert,
			disableClose: false
		});
		this.autoClose();
	}

	autoClose() {
		setTimeout(() => {
			if (this.mDialogRef) this.mDialogRef.close();
		}, 7000);
	}


	openError(response: string) {
		// "Registration Successfull Please Check Your Mail";
		let alert: DialogModelError = new DialogModelError(
			response,
			"",
			null,
			null
		);

		this.mDialogRef = this.dialog.open(DialogErrorComponent, {
			data: alert,
			disableClose: false
		});
		this.autoClose();
	}

}
