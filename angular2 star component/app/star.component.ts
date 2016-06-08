import {Component, Input} from 'angular2/core';

@Component({
  selector: 'star',
  template:`
    <div>
      <i
       class="glyphicon"
       [class.glyphicon-star-empty]="!clicked"
       [class.glyphicon-star]="clicked"
       (click)="toggleStar()">
      </i>
    </div>
  `
})

export class StarComponent{
  @Input() clicked = false;
  toggleStar(){
    this.clicked = !this.clicked;
  }
}
