var twit = require('../index').twitter,
    twitterStats = require('../../models/twitter_stats');

var me = twit.stream('user', { track: '@recoverize', language: 'en' });

me.on('follow', function(follower) {

    if (follower.source.screen_name == 'recoverize') {
        return;
    }
    console.log(new Date + ': ' + follower.source.screen_name + ' now follows you.')

    twitterStats.findById('53deeb016047e6f37d98b166', function(err, stats) {
        if (err) {
            console.error("Error: " + err);
        }

        stats.newFollowers += 1;
        stats.totalFollowers += 1;

        stats.save(function(err) {
            if (err) {
                console.error("Error: " + err);
            }
        });
    });

});

me.on('unfollow', function(unfollower) {

    if (unfollower.source.screen_name == 'recoverize') {
        return;
    }
    console.log(new Date + ': ' + unfollower.source.screen_name + ' unfollowed you.');

    twitterStats.findById('53deeb016047e6f37d98b166', function(err, stats) {
        if (err) {
            console.error("Error: " + err);
        }

        stats.newUnfollowers += 1;
        stats.totalUnfollowers += 1;

        stats.save(function(err) {
            if (err) {
                console.error("Error: " + err);
            }
        });
    });
});