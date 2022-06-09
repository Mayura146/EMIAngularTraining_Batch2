import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  model=new User();
  userForm:NgForm;
  skills:string[]=['Angular','C#','SQL Server','PHP']
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userForm:NgForm)
  {
   
      this.userForm.reset();
  
  }
}