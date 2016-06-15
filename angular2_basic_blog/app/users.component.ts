import {Component, OnInit} from 'angular2/core';
import {UsersService} from './users.service';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'users',
  providers: [UsersService],
  directives: [ROUTER_DIRECTIVES],
  template: `
  <a class="btn btn-primary" [routerLink]="['AddUser']">Add User</a>
    <h2>Users</h2>
    <table class="table-bordered">
      <th>Name </th>
      <th>Email</th>
      <th>Edit</th>
      <th>Delete</th>
      <tr *ngFor="#user of users">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td><a [routerLink]="['AddUser', {id: user.id}]" class="glyphicon glyphicon-edit"></a></td>
        <td><a class="glyphicon glyphicon-remove"></a></td>
      </tr>
    </table>
  `
})
export class UsersComponent implements OnInit{

  users = [];
  constructor(private _usersService: UsersService){
  }

  ngOnInit(){
    let obs = this._usersService.getUsers()
    obs.subscribe(
      res => {this.users = res},
      null,
      null
    )
  }
}
