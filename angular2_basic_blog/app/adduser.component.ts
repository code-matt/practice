import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'

import {EmailValidator} from './emailvalidator';

@Component({
  selector: 'adduser',
  templateUrl: 'app/adduser.component.html'
})
export class AddUserComponent{
  adduser: ControlGroup;

  constructor(fb: FormBuilder){
    this.adduser = fb.group({
      name: ['',Validators.required],
      email: ['',EmailValidator.mustBeValidEmail],
      phone: [],
      street: [],
      city: [],
      zip: [],
    })
  }
}
