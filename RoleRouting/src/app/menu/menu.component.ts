import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
name:any;
  constructor(public service:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
    this.name=this.service.isAuthenticated;
  }
  LogOut()
  {
    this.service.isAuthenticated=false;
    this.router.navigate([''])
  }

}
