import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSolicitudComponent } from './home-solicitud/home-solicitud.component';
import { ListadoComponent } from './listado/listado.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeSolicitudComponent, ListadoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeSolicitudComponent
  ]
})
export class HomeModule { }
