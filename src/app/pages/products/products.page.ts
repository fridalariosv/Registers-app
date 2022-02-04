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
    this.productSvc
    .getProducts()
    .pipe(tap((products: Product[]) => (this.products = products)))
    .subscribe();
  }


  getTitle(value: string) {
    if (typeof value == "string" && value.length > 30) value = value.substring(0, 30) + "..."
    return value
  }


}
