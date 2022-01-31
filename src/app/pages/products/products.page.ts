import { Component, OnInit } from '@angular/core';
import { products } from '../../data/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  dataProducts: any = products;

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.dataProducts)
   this.dataProducts
  }

  getDescription(value:string) {
    if(typeof value == "string" && value.length>80) value = value.substring(0, 80) + "..."
    return value
  }

  getTitle(value:string) {
    if(typeof value == "string" && value.length>24) value = value.substring(0, 24) + "..."
    return value
  }


}
