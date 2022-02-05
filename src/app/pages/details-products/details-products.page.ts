import { Product } from './../products/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {
  products : Product[];
  idProduct: number;
  product: any;
  
  constructor(
    private productSvc: ProductsService,
    private route: ActivatedRoute
  ) { }

  setData(data): void{
    this.product = data;
    console.log(this.product); // setear la data a product
  }

  ngOnInit() {
    //this.productSvc.getProducts().pipe(tap((x: Product[]) => ( this.products = x))).subscribe();
    //console.log(this.products, 'desde detalles');
    //const url = `http://localhost:3000/products`

    const routeParams = this.route.snapshot.paramMap;
    this.idProduct = Number(routeParams.get('id')); // al asignar id al get, es la variable que le pasa desde el html

    /*
    this.productSvc
    .getProduct(this.idProduct)
    .pipe(tap(( product: Product[]) => (this.product = product, console.log(product, 'producto'))))
    .subscribe();
    */
    this.productSvc
    .getProduct(this.idProduct)
    .subscribe(
      (response) => {
        this.setData(response)
      }
    )
  }

  dataTest = { name: 'james'}
}

/*
    const routeParams = this.route.snapshot.paramMap;
    this.idCostumer = Number(routeParams.get('idCustomer'));
    this.idDocument = String(routeParams.get('idDocument'));
    const dataDocuments = await this.service.HttpResponse('getDocumentDetails', { code_register: this.idDocument })
    if (dataDocuments.status == 'Success') this.document = dataDocuments.data[0]

  */