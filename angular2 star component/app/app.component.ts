import {Component} from 'angular2/core';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: '<star [clicked]="testPost.isFavorite"></star>',
    directives: [StarComponent]
})
export class AppComponent {
  testPost = {
    title: "Title",
    isFavorite: true
  }
}
