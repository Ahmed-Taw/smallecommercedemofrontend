import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

    /**
     *
     */
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const isAdmin = this.authService.isAdmin();
        if (!isAdmin) {
         this.router.navigate(['/NoPermission']);
        }
         return isAdmin;
    }

}
