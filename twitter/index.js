var Twit = require('twit'),
    later = require('later');

exports.twitter = new Twit({
    consumer_key: 'tJgQbMgfNIedrrYaDD0CBTQC1',
    consumer_secret: 'nJAsyhL65B0NNKllw2fcN3YsTui5aJXvAkh8zmrO3vUeHMU8Ce',
    access_token: '1733468634-SAtGbzuQJHgJEonioZzffzxI6Sxj4V7X2cm3mkV',
    access_token_secret: 'PFB3r4p6x1g0CDOcg6RoACn0XYSLa3ZFqpH0kWHIj2yW8'
});

// Called from index to monitor for events
var account = require('./events/account');


// Load scheduled events
var tweets = require('./schedule/tweets');

// Do automated interactions
var tags = ['#justfortoday', '#12steps', '#bigbook', '#dailyreflections', '#sobriety', '#xa', '#affirmation', '#nohangovers', '#another24', '#thenaway', '#aahumor', '#recoveryispossible'];

var rt = require('./ai/retweet');

var rtSchedule = later.parse.text('every 8 hours');
later.setInterval(rt.retweet(tags), rtSchedule);