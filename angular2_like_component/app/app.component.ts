import {Component} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: '<likes></likes>',
    directives: [LikeComponent]
})
export class AppComponent { }
