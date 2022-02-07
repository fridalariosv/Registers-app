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
  searchedProduct: any;

  constructor(
    private productSvc: ProductsService
  ) { }

  ngOnInit(): void {
    this.searchedProduct = this.products;
    this.productSvc
    .getProducts()
    .pipe(tap((products: Product[]) => (this.products = products)))
    .subscribe();
  }


  getTitle(value: string) {
    if (typeof value == "string" && value.length > 30) value = value.substring(0, 30) + "..."
    return value
  }

  searchProduct(event) {
    const text = event.target.value;
    this.searchedProduct = this.products;
    if (text && text.trim() != '') {
      this.searchedProduct = this.searchedProduct.filter((product: any) => {
        return (product.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }
}
