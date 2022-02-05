import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    private apiURL = `http://localhost:3000/products`;
    private productData = 'http://localhost:3000/products'

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiURL);
    }

    getProduct(id:any): Observable<Product[]> {
        //console.log(id, 'del producto');
        console.log(`${this.apiURL}/${id}`, 'url con id');
        return this.http.get<Product[]>(`${this.apiURL}/${id}`);
        //return 'hola'
    }
}

/*

getProduct(id:any): Observable<Product[]> {
        //console.log(id, 'del producto');
        console.log(`${this.apiURL}/${id}`);
        //return this.http.get<Product[]>(this.productData);
    }

    */