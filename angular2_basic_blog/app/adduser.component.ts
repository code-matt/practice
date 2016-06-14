import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {Router} from 'angular2/router'

import {UsersService} from './users.service';
import {EmailValidator} from './emailvalidator';

@Component({
  selector: 'adduser',
  providers: [UsersService],
  templateUrl: 'app/adduser.component.html'
})
export class AddUserComponent{
  adduser: ControlGroup;

  constructor(fb: FormBuilder, private _usersService: UsersService, private _router: Router){
    this.adduser = fb.group({
      name: ['',Validators.required],
      email: ['',EmailValidator.mustBeValidEmail],
      phone: [],
      address: fb.group({
        street: [],
        city: [],
        zip: []
      })
    })
  }

  signUp(){
    this._usersService.addUser(this.adduser.value)
      .subscribe(res => {
        this._router.navigate(['Users']);
      })
  }
}
