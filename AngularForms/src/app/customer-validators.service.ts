import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerValidatorsService {

  constructor() { }

  public mustMatch(password:string,confirmPasswords:string)
  {
    return (formGroup:FormGroup)=>{
      const passwordControl=formGroup.controls[password];
      const confirmPassword=formGroup.controls[confirmPasswords];
      if(passwordControl.value!=confirmPassword.value)
      {
         confirmPassword.setErrors({passwordMatch:true})
      }

      else
      {
        confirmPassword.setErrors(null);
      }
    }
  }
}
