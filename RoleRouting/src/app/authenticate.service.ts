import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
user:any;
isAuthenticated=false;
isAdmin=false;
isUser=false;
response:any;
data:any;
  constructor(private http:HttpClient,private router:Router) { }
  public authenticateEmployee(data:any)
  {
    console.log(data);
    return this.http.get("http://localhost:3000/employee").subscribe(response=>{
      this.user=response;
      this.data=data;
      this.authenticateUser();
      this.navigateUser();
    })
  }

  authenticateUser()
  {
    this.response=(this.user.find((x:any)=>{
      return x.userName==this.data.userName && x.password==this.data.password

    }))
  }

navigateUser(){
  if(this.response)
  {
    this.checkRole();
  }
  else{
    alert ("Invalid Credential");
  }
}
checkRole()
{
  this.isAuthenticated=true;
  if(this.response.role==='admin')
  {
    this.isAdmin=true;
    this.isAuthenticated=true;
    this.router.navigate(['add']);
  }
  else if(this.response.role==='user')
  {
    this.isUser=true;
    this.isAuthenticated=true;
    this.router.navigate(['list']);
  }

  else
  {
    alert ("Invalis user");
  }
}
}
