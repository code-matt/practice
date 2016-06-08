import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
  selector: 'star',
  templateUrl: 'app/star.template.html',
  styles: [`
    .glyphicon-star {
      color: orange;
    }
  `]
})

export class StarComponent{
  @Input() clicked = false;
  @Output() change = new EventEmitter();
  toggleStar(){
    this.clicked = !this.clicked;
    this.change.emit({val: this.clicked});
  }
}
