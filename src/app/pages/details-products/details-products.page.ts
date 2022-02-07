import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {
  idProduct: number;
  product: any;
  
  constructor(
    private productSvc: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.idProduct = Number(routeParams.get('id'));
    this.productSvc
    .getProduct(this.idProduct)
    .subscribe(response => {
      this.product = response;
    })
  }
}