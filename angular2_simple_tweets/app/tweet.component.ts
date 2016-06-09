import {Component,Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
  selector: 'tweet',
  template: `
  <div class="media">
    <div class="media-left">
      {{"@" + user}}
      <a href="#">
        <img class="media-object well well-lg" src="{{image}}" alt="...">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{title}}</h4>
      {{body}}
    </div>
    <likes
      [numOfLikes]="numOfLikes"
      [liked]="liked"
      (likeChange)="addLike($event)">
    </likes>
  </div>
  <br/>
  `,
  directives: [LikeComponent]
})

export class TweetComponent {
  liked = false;
  @Input() user = 'default';
  @Input() title = 'default title';
  @Input() image = 'image';
  @Input() body = 'default body';
  @Input() favorites = 0;
  @Input() numOfLikes = 0;

  addLike($event){
    if($event.val){
      this.numOfLikes--;
    }else{
      this.numOfLikes++;
    }
  }

}
