import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from "./modules/home/home.module";
import { RequestModule } from "./modules/request/request.module";
import { NavbarComponent } from '../app/templates/navbar/navbar.component';
import { FooterComponent } from '../app/templates/footer/footer.component';
import { HeroComponent } from '../app/templates/hero/hero.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { HttpClientModule} from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RequestModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
