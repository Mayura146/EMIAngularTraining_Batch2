import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
isAuthenticated=false;
  constructor() { }

  public authenticateUser(username:string,password:string)
  {
    if(username==='admin' && password==='admin123')
    {
   this.isAuthenticated=true;
   return true;
    }

    else
    {
      return false;
    }
  }

  public canExit():boolean
  {
    if(confirm("Do you want to leave this page.confirm"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
