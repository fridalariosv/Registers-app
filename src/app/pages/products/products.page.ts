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

  getTitle(value:string) {
    if(typeof value == "string" && value.length>30) value = value.substring(0, 30) + "..."
    return value
  }


}
