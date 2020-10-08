import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../services/authentication.service';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {

  constructor(private authService: AuthenticationService, private router: Router) { }
  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null),// Filter out initial Behavious subject value
      take(1), // Otherwise the Observable doesn't complete
      map(isAuthenticated => {
        console.log('Found previous token, automatic login');
        if (isAuthenticated) {
          //Directly open inside area
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        } else {
          //simply allow access to the login 
          return true;
        }
      })
    );
  }
}
