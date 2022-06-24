import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
message="Invalid Credential";
  constructor(private service:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }

  public login()
  {
    const result=this.service.authenticateUser(this.username,this.password);
    if(result==true)
    {
      this.route.navigate(['product/list']);
    }
    else
    {
      this.route.navigate(['login']);
      
    }

    return this.message;
  }
}
