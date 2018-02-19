import { IAppState } from '../../../../shared/reduxstore/Store';
import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, NgRedux } from 'ng2-redux';
import { ShoppingCartItem } from '../../../../shared/models/shoppingCartItem';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
 
  
  products : Product[];
  filterdProducts:Product[];
  activeCategoryId; 
  constructor(private productsService:ProductService
    ,private route:ActivatedRoute
    ,private ngRedux:NgRedux<IAppState>) { 
      
    }

  ngOnInit() {
    this.productsService.getproducts().subscribe(result=>{
      this.products = result;
          
      this.route.queryParamMap
           .subscribe(query=>{
            this.activeCategoryId = query.get('category');
            this.filterdProducts = (this.activeCategoryId) ? 
            this.products.filter(p=>p.categoryId == this.activeCategoryId ) :
            this.products;
               });
      });
  }
}
