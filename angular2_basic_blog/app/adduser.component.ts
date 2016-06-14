import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {Router, RouteParams} from 'angular2/router'

import {UsersService} from './users.service';
import {EmailValidator} from './emailvalidator';
import {User} from './user'

@Component({
  selector: 'adduser',
  providers: [UsersService],
  templateUrl: 'app/adduser.component.html'
})
export class AddUserComponent implements OnInit{
  adduser: ControlGroup;
  id: number;
  user = new User();
  title: string;

  constructor(fb: FormBuilder, private _usersService: UsersService, private _router: Router, private _routeParams: RouteParams){
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

  ngOnInit(){
    this.id = +this._routeParams.params['id']
    this.title = this.id? 'Edit User' : 'Add User'

    if (!this.id)
      return;

    console.log(this.id)

    this._usersService.getUser(this.id)
      .subscribe(
        user => this.user = user
      )
  }
}
