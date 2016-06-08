import {Component} from 'angular2/core';
import {VoteComponent} from './voter.component'

@Component({
    selector: 'my-app',
    template: `
      <voter
        [voteCount]="fakeAnswer.voteCount"
        [myVote]="fakeAnswer.myVote"
        (vote)="voteChange($event)">
      </voter>
    `,
    directives: [VoteComponent]
})
export class AppComponent {
  fakeAnswer = {
    title: "title",
    voteCount: 20,
    myVote: 0
  }

  voteChange($event){
    if(this.fakeAnswer.myVote < 1 && this.fakeAnswer.myVote > -1)
    {
      this.fakeAnswer.myVote += $event.val ? 1 : -1;
      this.fakeAnswer.voteCount += $event.val ? 1 : -1;
    }
  }
}
