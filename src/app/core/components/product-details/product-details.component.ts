import { ShoopingCartService } from './../../../shared/services/Shopping-Cart.service';
import { Product } from './../../../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { localErrorHandler } from '../../../shared/helpers/HttPErrorHandler';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id;
  product;
  images;
  // :  Product={
  //   id:0,
  //   title:"",
  //   image:"",
  //   price:0,
  //   categoryId:-1
  // };
  constructor(private productsService: ProductService,
              private activatedRoute:ActivatedRoute,
            private shoppingCartService: ShoopingCartService) {

              
             }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      //this.product.id = this.id;
      this.productsService.getproduct(this.id).subscribe(result=>{
          this.product = result.json();
      },error=>{localErrorHandler(error)})

      this.productsService.getImages(this.id).subscribe(response=>{
        this.images = response.json();
       
      });
  }
  }

  async addToCart(){
    await this.shoppingCartService.addToCart(this.product);

  }
}
