import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtHelper} from 'angular2-jwt'
import { Headeroptions } from '../helpers/Constants';

@Injectable()
export class AuthService {

//  private loggedIn = false;
  constructor(private http: Http) { }
  url = "http://localhost:4566/api/Auth/login";

loginfrom(){
 return this.http.get(this.url);
}

  login(emial:string, password:string){
    return this.http.post(this.url,JSON.stringify({email:emial, password:password}),Headeroptions)
    .map(response=>{
      let result = response.json();
      if(result && result.token)
      {
        localStorage.setItem("JWTKey",result.token);
        return true;
      }else{
        return false;
      }
    
        });
  }

  logOUt(){
    localStorage.removeItem("JWTKey");


  }
LoggedIn(){
   if(localStorage.getItem("JWTKey") != null){
     return true;
   }else{
     return false;
   }
  }
  isAdmin(){
   
   let decodedtoken = this.decodeToken();
  if(decodedtoken){
    return decodedtoken.isAdmin;
  }
    return false;
  
  }

  getLoggedInUserId(){
    let decodedtoken = this.decodeToken();
  if(decodedtoken){
    return decodedtoken.id;
  }
  }

  getloggedInUserName(){
    let decodedtoken = this.decodeToken();
  if(decodedtoken){
    return decodedtoken.firstName;
  }
  }

  private decodeToken(){
    let helper = new JwtHelper();
    let token = localStorage.getItem('JWTKey');
    if(token)
    return helper.decodeToken(token);
  }

}
