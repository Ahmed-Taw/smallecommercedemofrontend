import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Product[];
  activeCategoryId:Number; 
  constructor(private productsService:ProductService) { }

  ngOnInit() {
    // this.productsService.getproducts().subscribe(result=>{
    //   this.products = result;
    // })
  }

}
