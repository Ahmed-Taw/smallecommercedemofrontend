import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    /**
     *
     */
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       const loggedin = this.authService.LoggedIn();
       if (!loggedin) {
        this.router.navigate(['/LogIn'], {queryParams: {returnUrl: state.url}});
       }
        return loggedin;
    }

}

// @Injectable()
// export class AdminGuard implements CanActivate{

//     /**
//      *
//      */
//     constructor(private authService: AuthService,private router:Router) {
//     }
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
//         let isAdmin = this.authService.isAdmin();
//         if(!isAdmin)
//          this.router.navigate(['/NoPermission']);
//          return isAdmin;
//     }

// }
