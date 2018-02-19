import { AuthService } from './../shared/services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductslistComponent } from './components/products/productslist/productslist.component';
import { ProductsFilterComponent } from './components/products/products-filter/products-filter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path:'',
        component:ProductslistComponent
      },
      {
        path:'LogOut',
        component:LogoutComponent,
      },
      {
        path:'LogIn',
        component:LoginComponent
      },
      {
        path:'NoPermission',
        component:NoPermissionComponent
      },
      {
        path:"**",
        component:NotFoundComponent
      }
    ])
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    NavBarComponent,
    ProductsFilterComponent,
    ProductslistComponent,
    NotFoundComponent,
    NoPermissionComponent
  ],
  exports:[
    NavBarComponent
  ]
})
export class CoreModule { }
