import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './validators/passwordValidators';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html'
})
export class LoginComponent{
  form: ControlGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      currentpassword: ['',Validators.compose([
        Validators.required
      ])],
      newpassword: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      confirmpassword: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
    }, {validator:PasswordValidators.passwordsMustMatch})
  }

  onSubmit(){
  }
}
