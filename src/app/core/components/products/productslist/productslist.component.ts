import { async } from '@angular/core/testing';
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
  totalItems;
  query: any = {
    pageSize: 5,
    pageNum: 1,
    categoryId: 0
   };
  //  query:any={
  //   pageSize:5,
  //   pageNum:1,
  //   sortBy:'',
  //   isSortAsc:true
  //  };
  products: Product[];
  filterdProducts: Product[];
  activeCategoryId;
  constructor(private productsService: ProductService
    , private route: ActivatedRoute
    , private ngRedux: NgRedux<IAppState>) {

    }

  async ngOnInit() {
    await this.route.queryParamMap
    .subscribe(query => {
     this.activeCategoryId = query.get('category');
     if (this.activeCategoryId) {
       this.query.categoryId = this.activeCategoryId;
       this.query.pageNum = 1;

     } else {
      this.query.categoryId = 0;
     }
     this.populateData();
        });
  }

  private async populateData() {
    console.log(this.query);
    await this.productsService.getproducts(this.query).subscribe(response => {
      const result = response as {products: Product[], productsTotalCount: number };
      this.products = result.products;
      this.totalItems = result.productsTotalCount;
      });
  }


  onPageChange(page) {
    this.query.pageNum = page;
    this.populateData();

  }
}
