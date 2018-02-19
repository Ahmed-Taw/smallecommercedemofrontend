import { CategoryService } from '../../../../shared/services/category.service';
import { Category } from '../../../../shared/models/Category';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {

  categories:Category[] = [];
 @Input('activecategory') activecategoryid:number;
 @Input('navigateto') navigateTo:string;
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result=> this.categories = result);
  }

}
