// Scheduled tweets
var twit = require('../twitter').twitter;
    later = require('later'),
    twitterStats = require('../models/twitter_stats');


// Send out #justfortoday tweet every morning
var jftSchedule = later.parse.text('at 12:00 pm');
later.setInterval(function() {

    var quotes = require('../content/jftquotes');
    var quoteCount = Object.keys(quotes).length;
    var quoteNumber = Math.floor(Math.random() * (quoteCount - 1) + 1);
    twit.post('statuses/update', { status: quotes[quoteNumber] }, function(err, data, response) {
        console.log('#justfortoday tweet sent.');
    });

}, jftSchedule);

// Send out #bigbook tweet every evening
var bbqSchedule = later.parse.text('at 11:30 pm');
later.setInterval(function() {

    var quotes = require('../content/bbquotes');
    var quoteCount = Object.keys(quotes).length;
    var quoteNumber = Math.floor(Math.random() * (quoteCount - 1) + 1);

    twit.post('statuses/update', { status: quotes[quoteNumber] }, function(err, data, response) {
        console.log('Evening #bigbook tweet sent.');
    });

}, bbqSchedule);

// Send out daily promo tweet
//var promoSchedule = later.parse.text('at 6:00 pm');
//later.setInterval(function() {
//
//    var promos = require('../content/promos'),
//        promoCount = Object.keys(promos).length;
//    var promoNumber =  Math.floor(Math.random() * (promoCount - 1) + 1);
//
//    twit.post('statuses/update', { status: promos[promoNumber] }, function(err, data, response) {
//        if (err) {
//            console.error("Couldn't send promo tweet: ", err);
//        } else {
//            console.log('Daily promo tweet sent.');
//        }
//    });
//
//}, promoSchedule);


// Send out slogan tweet
var sloganSchedule = later.parse.text('at 2:00 am');
later.setInterval(function() {

    var slogans = require('../content/slogans'),
        sloganCount = Object.keys(slogans).length;
    var sloganNumber = Math.floor(Math.random() * (sloganCount - 1) + 1);

    twit.post('statuses/update', { status: slogans[sloganNumber] }, function(err, data, response) {
        if (err) {
            console.error("Couldn't send slogan tweet: ", err);
        } else {
            console.log('Daily slogan tweet sent.');
        }
    });
}, sloganSchedule);

