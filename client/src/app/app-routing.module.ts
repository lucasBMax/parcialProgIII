import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSolicitudComponent } from "./modules/home/home-solicitud/home-solicitud.component";
import { RequestModule } from './modules/request/request.module';
import { PageNotFoundComponent } from "./templates/page-not-found/page-not-found.component";
import { SolicitudComponent } from './modules/request/solicitud/solicitud.component';
import { ListadoComponent } from './modules/home/listado/listado.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeSolicitudComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'request/solicitar',
    component: SolicitudComponent
  },
  {
    path: 'request/versolicitudes',
    component: ListadoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
/*   {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'security',
    loadChildren: './modules/security/security.module#SecurityModule',
  },
  {
    path: 'country',
    loadChildren: './modules/parameters/country-admin/country-admin.module#CountryAdminModule',
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: 'city',
    loadChildren: './modules/parameters/city-admin/city-admin.module#CityAdminModule',
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
