var levelup = require('levelup');
var twit = require('./twitter/index').twitter;
var later = require('later');

// json content
var jftquotes = require('./content/jftquotes');
var bbquotes = require('./content/bbquotes');



// Setup leveldb
var db = levelup('./data');


console.log('trolling twitter....');


// Scheduled tweets
later.date.localTime();

var morningTweet = later.parse.text('every 2 min');
later.setInterval(function() {
    db.get('tweet_count', function (err, value) {
        twit.post('statuses/update', { status: jftquotes[value] }, function (err, data, response) {
            console.log('tweet sent!');
        });
    });
}, morningTweet);

var eveningTweet = later.parse.text('at 06:30pm every day');
later.setInterval(function() {
    db.get('tweet_count', function (err, value) {
        twit.post('statuses/update', { status: bbquotes[value] }, function (err, data, response) {
            console.log('tweet sent!');
        });

        if (isNaN(value)) {
            value = 1;
        }

        value++;
        db.put('tweet_count', value, function (err) {
            console.error(err);
        });
    });
}, eveningTweet);



/*
 * My Events
 */


// new follows
var me = twit.stream('user', { track: '@recoverize', language: 'en' });
me.on('follow', function (follower) {

    console.log('new follower!');

    db.get('new_follows', function (err, value) {
        if (isNaN(value)) {
            value = 1;
        }

        value++;
        db.put('new_follows', value, function (err) {
           if (err) {
               console.error(err);
           }
        });
    });
});

