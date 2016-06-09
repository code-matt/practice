import {Component,Input} from 'angular2/core';

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
    <div class="media-body jumbotron">
      <h4 class="media-heading">{{title}}</h4>
      {{body}}
    </div>
  </div>
  <br/>
  `
})

export class TweetComponent {
  @Input() user = 'default';
  @Input() title = 'default title';
  @Input() image = 'image';
  @Input() body = 'default body';
  @Input() favorites = 0;

}
