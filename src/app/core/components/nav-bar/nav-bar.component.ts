import { IAppState } from '../../../shared/reduxstore/Store';
import { NgRedux, select } from 'ng2-redux';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@select(s=>s.cart.totalItems)cartItemsCount;
username;

  constructor(private authService: AuthService, private ngredux:NgRedux<IAppState>) { 
    
  }

  ngOnInit() {
  this.username = this.authService.getloggedInUserName()?
                    this.authService.getloggedInUserName():
                    "User Name";

  }
}
