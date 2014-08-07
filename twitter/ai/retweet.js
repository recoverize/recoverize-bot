// pick random hashtag from array,

// get an array of possible tweets and retweet a random one
// make sure they don't have a lot of followers

var twit = require('../index').twitter;

exports.retweet = function(hashtags) {

    var randomHashtag = Math.floor(Math.random() * (hashtags.length - 0) + 0);

    twit.get('search/tweets', { q: hashtags[randomHashtag], count: 500}, function (err, data) {

        var tweetList = [];

        data.statuses.forEach(function(status) {

            if (status.user.followers_count < 400 &&
                status.user.screen_name != 'recoverize' &&
                status.user.statuses_count < 1000) {

                tweetList.push(status.id_str);
            }
        });

        var randomRetweet = Math.floor(Math.random() * (tweetList.length - 0) + 0);
        twit.post('statuses/retweet/:id', { id: tweetList[randomRetweet] }, function(err, data, response) {
            console.log('Random retweet executed');
        });

    });
}