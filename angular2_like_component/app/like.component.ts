import {Component,Input,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'likes',
  template: `
    <i
      class="glyphicon glyphicon-heart"
      (click)="likeEvent(liked)"
      [style.color]="!liked ? '#CCC' : 'deeppink'">
    </i>
    {{numOfLikes}}
  `,
  styles: [`
    .glyphicon-heart{
      color: #CCC;
      cursor: pointer;
    }
  `]
})
export class LikeComponent{
  @Input() numOfLikes = 0;
  @Input() liked = false;
  @Output() likeChange = new EventEmitter();
  likeEvent(liked){
    this.liked = !this.liked;
    this.likeChange.emit({val: liked})
  }
}
