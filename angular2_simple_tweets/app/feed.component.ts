import {Component} from 'angular2/core';
import {TweetsService} from './tweets.service';

@Component({
  selector: 'feed',
  template: `
    <h3>FEEED</h3>
    <div *ngFor="#tweet of tweets">
      <tweet></tweet>
    </div>
  `,
  providers: [TweetsService]
})

export class FeedComponent {
  tweets;

  constructor(tweetsService: TweetsService) {
    this.tweets = tweetsService.getTweets();
  }
}
