import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
  selector: 'voter',
  template: `
    <div style="width: 20px">
      <i
        class="glyphicon glyphicon-menu-up"
        (click)="upVote()"
        [class.highlighted]="myVote === 1">
      </i>
      <span> {{voteCount}} </span>
      <i
        class="glyphicon glyphicon-menu-down"
        (click)="downVote()"
        [class.highlighted]="myVote === -1">
      </i>
    </div>
    `,
    styles: [`
      .highlighted{
        color: orange;
      }
    `]
})

export class VoteComponent{
  @Input() voteCount = 0;
  @Input() myVote = 0;
  @Output() vote = new EventEmitter();
  upVote(){
    this.vote.emit({val: 1})
  }
  downVote(){
    this.vote.emit({val:0})
  }
}
