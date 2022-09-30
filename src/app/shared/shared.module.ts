import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkStepperModule} from "@angular/cdk/stepper";
import { StepperComponent } from './stepper/stepper.component';
import {CdkListboxModule} from "@angular/cdk/listbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    CdkListboxModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule
  ],
  exports: [
    CdkStepperModule,
    StepperComponent
  ]
})
export class SharedModule { }
