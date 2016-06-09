import {Component,Input} from 'angular2/core'

@Component({
  selector: 'zippy',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading" (click)="toggleZippy()" style = "cursor:pointer">
      <h3 class="panel-title">{{title}}</h3>
      <i class="glyphicon"
        [ngClass]="{
          'glyphicon-chevron-down': !expanded,
          'glyphicon-chevron-up': expanded
        }">
      </i>
    </div>
    <div class="panel-body" *ngIf="expanded">
      <ng-content></ng-content>
    </div>
  </div>
  `
})

export class ZippyComponent{
  expanded = false;
  @Input() title = "default title"

  toggleZippy(){
    this.expanded = !this.expanded;
  }

}
