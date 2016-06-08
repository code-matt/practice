import { Component } from 'angular2/core';

@Component({
  selector: 'star',
  template:`
    <div>
      <i class="glyphicon glyphicon-star-empty" (click)="toggleStar($event)"></i>
    </div>
  `
})

export class StarComponent{
  clicked = false;
  toggleStar($event){
    if(!this.clicked){
      $event.target.className="glyphicon glyphicon-star"
      this.clicked = true;
    }else{
      $event.target.className="glyphicon glyphicon-star-empty"
      this.clicked = false;
    }
  }
}
