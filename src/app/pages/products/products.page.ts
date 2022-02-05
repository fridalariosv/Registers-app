import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products!: Product[];

  constructor(
    private productSvc: ProductsService
  ) { }

  ngOnInit(): void {
    //console.log(this.products)
    this.productSvc
    .getProducts()
    .pipe(tap((products: Product[]) => (this.products = products)))
    //.pipe(tap((products: Product[]) => (console.log(products, 'Data from products.ts'))))
    .subscribe();
    console.log(this.products, 'desde productos');
  }


  getTitle(value: string) {
    if (typeof value == "string" && value.length > 30) value = value.substring(0, 30) + "..."
    return value
  }
}
