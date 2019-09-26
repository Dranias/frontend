import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoModel} from '../model/producto.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Array<ProductoModel>;
  constructor(private http: HttpClient) { }

  public getProductos(): Observable<ProductoModel[]>{
    return this.http.get<ProductoModel[]>('http://localhost:8080/getProductos');
  }
}
