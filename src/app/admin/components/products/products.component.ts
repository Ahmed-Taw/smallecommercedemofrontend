import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  page:4;
  pagesize:2;
  products:any[];
  filteredProducts:any[];
  constructor(private productsService:ProductService) {

   }
  ngOnInit() {
    this.productsService.getproducts().subscribe(result=>{
      this.filteredProducts = this.products = result;
    });
  }

  filter(query : string){
    this.filteredProducts = (query) ? 
    this.products.filter(p=>(p.title as string).toLowerCase().includes(query.toLowerCase())) :
     this.products;
  }

}
