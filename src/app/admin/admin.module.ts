import { AdminGuard } from './services/adminGuard.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/services/AuthGuard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path:'admin/products/new',
        component:ProductsFormComponent,
        canActivate:[AuthGuard,AdminGuard]    
      },
      {
        path:'admin/products/:id',
        component:ProductsFormComponent,
        canActivate:[AuthGuard,AdminGuard]    
      },{
        path:'admin/Products',
        component:ProductsComponent,
        canActivate:[AuthGuard,AdminGuard]        
      }
    ])

    
  ],
  declarations: [
    ProductsComponent,
    ProductsFormComponent
  ],
  providers:[
    AdminGuard
  ]
})
export class AdminModule { }
