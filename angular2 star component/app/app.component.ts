import {Component} from 'angular2/core';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><star></star>',
    directives: [StarComponent]
})
export class AppComponent { }
