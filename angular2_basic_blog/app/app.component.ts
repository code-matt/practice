import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {UsersComponent} from './users.component'
import {HomeComponent} from './home.component';
import {PostsComponent} from './posts.component'
import {NavbarComponent} from './navbar.component';
import {AddUserComponent} from './adduser.component';

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/Users', name: 'Users', component: UsersComponent },
  { path: '/Posts', name: 'Posts', component: PostsComponent },
  { path: '/AddUser', name: 'AddUser', component: AddUserComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    template: `
      <navbar></navbar>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    `
})
export class AppComponent {
}
