import {Component} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: `
      <likes
        [numOfLikes]="fakePost.numOfLikes"
        [liked]="fakePost.liked"
        (likeChange)="addLike($event)">
      </likes>
    `,
    directives: [LikeComponent]
})
export class AppComponent {
  fakePost = {
    title: 'Title',
    liked: false,
    numOfLikes: 10
  }

  addLike($event){
    if($event.val){
      this.fakePost.numOfLikes--;
    }else{
      this.fakePost.numOfLikes++;
    }
  }
}
