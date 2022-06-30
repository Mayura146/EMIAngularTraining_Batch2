import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthenticateService) { }

  ngOnInit(): void {
  }

  public onSubmit(form:NgForm)
  {
    this.service.authenticateEmployee(form.value);
  }
}
