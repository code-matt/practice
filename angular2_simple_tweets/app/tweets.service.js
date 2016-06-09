System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        {
                            user: 'Conner',
                            title: 'Say What?',
                            image: 'http://lorempixel.com/100/100/people?1',
                            body: "Worldwide quantum web may be possible with help from graphs ",
                            favorites: 17,
                        },
                        {
                            user: 'kittykat2',
                            title: 'Science!',
                            image: 'http://lorempixel.com/100/100/people?2',
                            body: "Scientists observe supermassive black hole feeding on cold gas",
                            favorites: 32,
                        },
                        {
                            user: 'AngelaWorld',
                            title: 'Hobbits are Real',
                            image: 'http://lorempixel.com/100/100/people?3',
                            body: "Likely ancestor of mystery 'hobbit' found",
                            favorites: 5,
                        }
                    ];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map