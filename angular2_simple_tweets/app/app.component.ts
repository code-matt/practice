import {Component} from 'angular2/core';
import {FeedComponent} from './feed.component'

@Component({
    selector: 'my-app',
    template: `
    <h3>TWEETER<h3>
    <span><feed></feed></span>
    `,
    directives: [FeedComponent]
})
export class AppComponent { }
