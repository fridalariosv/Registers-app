import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../interfaces/product.interface";

@Injectable(
    { providedIn: 'root' }
)
export class ProductDetailService {
    products: Product[] = [];

    private cartSubject = new BehaviorSubject<Product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);


    private addToCart(product: Product): void {
        const isProductInCart = this.products.find(({ id }) => id == product.id)
        console.log(isProductInCart)
    }
}