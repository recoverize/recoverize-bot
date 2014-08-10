// Scheduled tweets
var twit = require('../index').twitter;
    later = require('later'),
    twitterStats = require('../../models/twitter_stats');


// Send out #justfortoday tweet every morning
var jftSchedule = later.parse.text('at 12:00 pm');
later.setInterval(function() {

    twitterStats.findById('53deeb016047e6f37d98b166', function(err, stats) {
        if (err) {
            console.error("Error: " + err);
        }

        var quotes = require('../../content/jftquotes');

        twit.post('statuses/update', { status: quotes[stats.tweetDay] }, function(err, data, response) {
            console.log('#justfortoday tweet sent.');
        });

    });

}, jftSchedule);


// Send out daily promo tweet
var promoSchedule = later.parse.text('at 06:00 pm');
later.setInterval(function() {

    console.log('promo tweet');

//    var promos = require('../../content/promos');
//    var promoNumber =  Math.floor(Math.random() * (promos.length - 1)) + 1;
//
//    twit.post('statuses/update', { status: promos[promoNumber] }, function(err, data, response) {
//        if (err) {
//            console.error("Couldn't send promo tweet: ", err);
//        } else {
//            console.log('Daily promo tweet sent.');
//        }
//    });

}, promoSchedule);


// Send out #bigbook tweet every evening
var bbqSchedule = later.parse.text('at 11:30 pm');
later.setInterval(function() {

    twitterStats.findById('53deeb016047e6f37d98b166', function(err, stats) {
        if (err) {
            console.error("Error: " + err);
        }

        var quotes = require('../../content/bbquotes');

        twit.post('statuses/update', { status: quotes[stats.tweetDay] }, function(err, data, response) {
            console.log('Evening #bigbook tweet sent.');
        });

        stats.tweetDay += 1;

        stats.save(function(err) {
            if (err) {
                console.error("Error: " + err);
            }
        });
    });
}, bbqSchedule);