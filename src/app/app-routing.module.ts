import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ProductoComponent} from './producto/producto.component';
import {LoginComponent} from './login/login.component';
import {PuntoventaComponent} from './puntoventa/puntoventa.component';


const routes: Routes = [
  { path: '', redirectTo: '/appComponent', pathMatch: 'full'  },
  { path: 'productComponent', component: ProductoComponent },
  { path: 'loginComponent', component: LoginComponent },
  {path: 'puntoVenta', component: PuntoventaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
