import { Product } from './../../../shared/models/Product';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 totalItems;
 search;

 query: any = {
  pageSize: 5,
  pageNum: 1,
  sortBy: '',
  isSortAsc: true
 };
  products: any[];
  filteredProducts: any[];
  constructor(private productsService: ProductService) {

   }
  ngOnInit() {
   this.populateProducts();
  }

  private populateProducts() {
    this.productsService.getproducts(this.query).subscribe(resposne => {
   const result = resposne as {products: Product[], productsTotalCount: number};
      this.filteredProducts = this.products = result.products;
      this.totalItems = result.productsTotalCount;

    });
  }

  onPageChange(Page) {
this.query.pageNum = Page;
this.populateProducts();
  }

  changePageSize() {
    this.populateProducts();
  }
  filter() {
    this.filteredProducts = (this.search) ?
    this.products.filter(p => (p.title as string).toLowerCase().includes(this.search.toLowerCase())) :
     this.products;
  }


  sort(sortBy) {
    if (this.query.sortBy === sortBy) {
      this.query.isSortAsc = !this.query.isSortAsc;
    } else {
      this.query.sortBy = sortBy;
      this.query.isSortAsc = true;
    }
    this.populateProducts();
  }
}
