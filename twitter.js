var Twit = require('twit'),
    later = require('later');

exports.twitter = new Twit({
    consumer_key: process.env.TWIT_CONSUMER_KEY,
    consumer_secret: process.env.TWIT_CONSUMER_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_SECRET
});

// Called from index to monitor for events
var account = require('./events/tw_account');

// Load scheduled events
var tweets = require('./schedule/tweets');

// Do automated interactions
var tags = ['#justfortoday', '#12steps', '#bigbook', '#dailyreflections', '#sobriety', '#xa', '#affirmation', '#recoverytalk', '#another24', '#thenaway', '#aahumor', '#recoveryispossible'];

var rt = require('./ai/retweet');

var rtSchedule = later.parse.text('every 8 hours');
later.setInterval(function() { rt.retweet(tags) }, rtSchedule);
