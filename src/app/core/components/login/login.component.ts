import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }
  Login(form: NgForm) {
    console.log(form.controls['email'].value);
    this.authService.login(form.controls['email'].value, form.controls['pass'].value).subscribe(result => {

if (result) {
  const returnurl = this.activatedroute.snapshot.queryParamMap.get('returnUrl') || '/';
  this.route.navigate([returnurl]);
}
    });

  }
}
