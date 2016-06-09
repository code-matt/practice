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
                            username: 'kittykat',
                            profilepic: 'http://loremoixel.com/100/100/people?1',
                            body: "bla bla blabla bla blabla bla blabla bla blabla bla bla\n        bla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla\n        bla bla blabla bla blabla bla blabla bla blabla bla bla",
                            favorites: 17,
                        },
                        {
                            username: 'kittykat',
                            profilepic: 'http://loremoixel.com/100/100/people?1',
                            body: "bla bla blabla bla blabla bla blabla bla blabla bla bla\n        bla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla\n        bla bla blabla bla blabla bla blabla bla blabla bla bla",
                            favorites: 32,
                        },
                        {
                            username: 'kittykat',
                            profilepic: 'http://loremoixel.com/100/100/people?1',
                            body: "bla bla blabla bla blabla bla blabla bla blabla bla bla\n        bla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla\n        bla bla blabla bla blabla bla blabla bla blabla bla bla",
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