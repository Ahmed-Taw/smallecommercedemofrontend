import { Product } from '../../../shared/models/Product';
import { Router } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../shared/models/Category';
import { localErrorHandler } from '../../../shared/helpers/HttPErrorHandler';

@Component({
  selector: 'products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
product :  Product ={
  id:0,
  title:"",
  image:"",
  price:0,
  categoryId:-1
};
id
categories: Category[]=[];
 
  constructor(private categoryService: CategoryService,
                  private productsService: ProductService,
                  private activatedRoute:ActivatedRoute,
                  private router:Router )
   {

     
 }

  ngOnInit() {
   
    this.categoryService.getCategories().subscribe(response=>
      {
        this.categories = response;
      });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
if(this.id){
this.productsService.getproduct(this.id).subscribe(result=>{
    this.product.title = result.title;
    this.product.price = result.price;
    this.product.image = result.image;
    this.product.categoryId = result.categoryId;
},error=>{localErrorHandler(error)})
}
  }
  save(){
  if(this.id){
    console.log(this.product);
  this.productsService.updateProduct(this.id,this.product).subscribe(result=>{
    this.router.navigate(["/admin/Products"]);    
  },error=>localErrorHandler(error));

    return;
  } 
  this.productsService.postProduct(this.product).subscribe(result=>{
    this.router.navigate(["/admin/Products"]);    
  },error=>localErrorHandler(error));
  }
  delete(){
    if(confirm("Are you sure that you want to delete this product")){
      let result = this.productsService.deleteProduct(this.id).subscribe(result=>{
        this.router.navigate(["/admin/Products"]);    
      },error=>localErrorHandler(error));
    }
  }

}
