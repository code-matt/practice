import {Component} from 'angular2/core';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: `
    <star
      [clicked]="testPost.isFavorite"
      (change)="favoriteToggle($event)">
    </star>`,
    directives: [StarComponent]
})
export class AppComponent {
  testPost = {
    title: "Title",
    isFavorite: true
  }
  favoriteToggle($event){
    console.log($event.val);
  }
}
