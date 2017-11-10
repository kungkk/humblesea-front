import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './-services/auth.service';


@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
        
    }    
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
        // handle any redirects if a user isn't authenticated
        if (!this.authService.isLoggedIn) {
            // redirect the user
            this.router.navigate(['']);
            return false;
        }

        return true;        
    }
}