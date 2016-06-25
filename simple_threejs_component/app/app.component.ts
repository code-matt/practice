import {Component} from '@angular/core';
import {ThreeComponent} from './three.component';

@Component({
    selector: 'my-app',
    directives: [ThreeComponent],
    template: '<three></three>'
})
export class AppComponent { }
