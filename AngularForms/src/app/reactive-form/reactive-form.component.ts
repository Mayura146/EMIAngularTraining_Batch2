import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerValidatorsService } from '../customer-validators.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
signupForm:FormGroup;
submitted=false;
  constructor(private formBuilder:FormBuilder,private validate:CustomerValidatorsService) { }

  ngOnInit(): void {

    this.signupForm=this.formBuilder.group(
      {
        name:["Enter your Name",Validators.required,Validators.minLength(3)],
        email:["",[Validators.required,Validators.email]],
        userName:["",Validators.required],
        password:["",
       [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"),
      
      ],
    ],

    confirmPassword:["",Validators.required,
    {
      validator:this.validate.mustMatch("password","confirmPassword")
    },
      
  ]
      }

  );

  }

  public OnSubmit():void
  {
    this.submitted=true;
    alert("Form Submitted !!");
    if(this.signupForm.valid)
    {
      console.table(this.signupForm.value);
    }
  }
  Onreset()
  {
    this.signupForm.reset();
  }
}
