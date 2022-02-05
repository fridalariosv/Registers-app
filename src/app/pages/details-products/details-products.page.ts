import { Product } from './../products/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductsService } from '../products/services/products.service';
import { ProductDetailService } from '../products/services/productDetail.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {
  products : Product[];
  idProduct: number;
  

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductsService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.productSvc.getProducts().pipe(tap((x: Product[]) => ( this.products = x))).subscribe();
    console.log(this.products, 'desde detalles');

    const routeParams = this.route.snapshot.paramMap;
    this.idProduct = Number(routeParams.get('id')); // al asignar id al get, es la variable que le pasa desde el html
    console.log(this.idProduct, 'Ruta'); //Id que se le pasa desde el HTML
  }
}

/*
    const routeParams = this.route.snapshot.paramMap;
    this.idCostumer = Number(routeParams.get('idCustomer'));
    this.idDocument = String(routeParams.get('idDocument'));
    const dataDocuments = await this.service.HttpResponse('getDocumentDetails', { code_register: this.idDocument })
    if (dataDocuments.status == 'Success') this.document = dataDocuments.data[0]

  */