var mongoose = require('mongoose');

var twitterStatsSchema = mongoose.Schema({
    newFollowers: Number,
    totalFollowers: Number,
    newUnfollowers: Number,
    totalUnfollowers: Number,
    tweetSent: Number,
    retweets: Number,
    favorites: Number,
    retweeted: Number,
    favorited: Number,
    onlineSince: Number,
    tweetDay : Number
});

twitterStats = mongoose.model('twitterStats', twitterStatsSchema);
module.exports = twitterStats;

// Initialize twitter stats
twitterStats.count(function(err, count) {
    if (count === 0) {

        var stats = new twitterStats;

        stats.newFollowers = 0;
        stats.totalFollowers = 0;
        stats.newUnfollowers = 0;
        stats.totalUnfollowers = 0;
        stats.tweetSent = 0;
        stats.retweets = 0;
        stats.favorites = 0;
        stats.retweeted = 0;
        stats.favorited = 0;
        stats.onlineSince = 0;
        stats.tweetDay = 1;

        stats.save(function(err, stats) {
            if (err) {
                return console.error("Failed to initalize stats document \n Error: " + err);
            }
        });
    }
});
