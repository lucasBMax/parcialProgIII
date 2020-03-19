import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SolicitudComponent
  ]
})
export class RequestModule { }
