export class TweetsService {
  getTweets() : any[] {
    return [
      {
        user: 'Conner',
        title: 'Say What?',
        image: 'http://lorempixel.com/100/100/people?1',
        body: `Worldwide quantum web may be possible with help from graphs `,
        favorites: 17,
      },
      {
        user: 'kittykat2',
        title: 'Science!',
        image: 'http://lorempixel.com/100/100/people?2',
        body: `Scientists observe supermassive black hole feeding on cold gas`,
        favorites: 32,
      },
      {
        user: 'AngelaWorld',
        title: 'Hobbits are Real',
        image: 'http://lorempixel.com/100/100/people?3',
        body: `Likely ancestor of mystery 'hobbit' found`,
        favorites: 5,
      }
    ];
  }
}
