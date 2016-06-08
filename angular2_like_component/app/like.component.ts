import {Component,Input,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'likes',
  template: `
    <i class="glyphicon glyphicon-heart"></i>
  `,
  styles: [`
    .glyphicon-heart{
      color: #CCC;
      cursor: pointer;
    }
  `]
})
export class LikeComponent{

}
