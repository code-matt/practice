import {Component, Input, EventEmitter, Output} from 'angular2/core';

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
  @Output() change = new EventEmitter();
  toggleStar(){
    this.clicked = !this.clicked;
    this.change.emit({val: this.clicked});
  }
}
