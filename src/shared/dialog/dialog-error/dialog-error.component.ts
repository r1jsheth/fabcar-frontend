import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogModelError } from './model';

@Component({
  selector: "app-dialog-error",
  templateUrl: "./dialog-error.component.html",
  styleUrls: ["./dialog-error.component.scss"]
})
export class DialogErrorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public _mData: DialogModelError
  ) {}

  ngOnInit():void {}

  onSubmit() {
    this.dialogRef.close(this._mData);
  }
}