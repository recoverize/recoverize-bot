// Scheduled tweets
var twit = require('../index').twitter;
    later = require('later'),
    twitterStats = require('../../models/twitter_stats');


// Send out #justfortoday tweet every morning
var jftSchedule = later.parse.text('at 1:30 pm');
var jftTweet = later.setInterval(function() {

    twitterStats.findById('53deeb016047e6f37d98b166', function(err, stats) {
        if (err) {
            console.error("Error: " + err);
        }

        var quotes = require('../../content/jftquotes');

        twit.post('statuses/update', { status: quotes[stats.tweetDay] }, function(err, data, response) {
            console.log(err);
        });

    });

}, jftSchedule);


// Send out #bigbook tweet every evening
var bbqSchedule = later.parse.text('at 1:00 am');
var bbqTweet = later.setInterval(function() {

    twitterStats.findById('53deeb016047e6f37d98b166', function(err, stats) {
        if (err) {
            console.error("Error: " + err);
        }

        var quotes = require('../../content/bbquotes');

        twit.post('statuses/update', { status: quotes[stats.tweetDay] }, function(err, data, response) {
            console.log(err);
        });

        stats.tweetDay += 1;

        stats.save(function(err) {
            if (err) {
                console.error("Error: " + err);
            }
        });
    });
}, bbqSchedule);