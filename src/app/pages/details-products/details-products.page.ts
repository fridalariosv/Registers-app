import { Product } from './../products/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductsService } from '../products/services/products.service';
import { ProductDetailService } from '../products/services/productDetail.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {
  id: any;
  finalId: number;
  products!: Product;
  

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductsService,
  ) { }

  ngOnInit() {
  }

  // private getItems(product: Product): void {
  //   this.id = this.activatedRoute.snapshot.paramMap.get("id");
  //   const dataProducts = this.products.find(({ id }) => id == this.product.id)
  //   this.finalId = this.id -1
  //   console.log(this.finalId)
  // }
}
