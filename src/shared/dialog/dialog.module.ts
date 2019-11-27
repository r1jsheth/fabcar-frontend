import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { DialogProgressComponent } from "./dialog-progress/dialog-progress.component";
import { DialogSuccessComponent } from "./dialog-success/dialog-success.component";
import { DialogErrorComponent } from "./dialog-error/dialog-error.component";
import { MaterialModule } from "src/app/material.module";



@NgModule({
  declarations: [
    DialogProgressComponent,
    DialogSuccessComponent,
    DialogErrorComponent
  ],
  imports: [CommonModule, MatDialogModule, MaterialModule],
  exports: [
    DialogProgressComponent,
    DialogSuccessComponent,
    DialogErrorComponent
  ],
  entryComponents: [
    DialogProgressComponent,
    DialogSuccessComponent,
    DialogErrorComponent
  ]
})
export class DialogModule {}
