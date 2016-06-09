import {Component} from 'angular2/core';
import {TweetsService} from './tweets.service';
import {TweetComponent} from './tweet.component';

@Component({
  selector: 'feed',
  template: `
    <h3>FEEED</h3>
    <div *ngFor="#tweet of tweets">
      <tweet
        [user]="tweet.user"
        [title]="tweet.title"
        [image]="tweet.image"
        [body]="tweet.body"
        [favorites]="tweet.favorites">
      </tweet>
    </div>
  `,
  providers: [TweetsService],
  directives: [TweetComponent]
})

export class FeedComponent {
  tweets;

  constructor(tweetsService: TweetsService) {
    this.tweets = tweetsService.getTweets();
  }
}
