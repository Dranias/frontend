import { Component, OnInit } from '@angular/core';
import {ProductoService} from './producto.service';
import {ProductoModel} from '../model/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers:[ProductoService]
})
export class ProductoComponent implements OnInit {

  private productos: Array<ProductoModel>;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.loadProductos();
  }

  private loadProductos(): void {
    this.productoService.getProductos().subscribe(res => {
      this.productos = res;
      console.log(res);
    });
  }

}
