import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';
import { PuntoventaComponent } from './puntoventa/puntoventa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    LoginComponent,
    PuntoventaComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
