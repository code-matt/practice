import {Component} from 'angular2/core';
import {LoginComponent} from './login.component';

@Component({
    selector: 'my-app',
    directives: [LoginComponent],
    template: '<login></login>'
})
export class AppComponent { }
