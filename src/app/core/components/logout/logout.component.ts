import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
    this.authservice.logOUt();
    this.router.navigate(["/"]);
  }

}
