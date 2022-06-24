import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanDeactivate<HomeComponent>,CanActivateChild,CanLoad {
  alertMessage='You dont have access to view this page!!. Please Login';
  constructor(private service:AuthenticationService,private router:Router)
  {

  }
  canLoad(): boolean {
    if(!this.service.isAuthenticated)
    {
      alert(this.alertMessage);
      this.router.navigate(['login']);
      return false;
    }
 
    return true;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.service.isAuthenticated)
    {
      alert(this.alertMessage);
      this.router.navigate(['login']);
      return false;
    }

  
    return true;
  }
  canDeactivate(component: HomeComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.service.canExit();
   
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
   if(!this.service.isAuthenticated)
   {
    alert(this.alertMessage);
    this.router.navigate(['login']);
    return false;
   }

   else
   {
    return true;
   }

  }
  
}
