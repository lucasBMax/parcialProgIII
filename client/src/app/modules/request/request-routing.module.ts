import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';


const routes: Routes = [
  {
    path: 'request/solicitar',
    component: SolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
