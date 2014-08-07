var twit = require('../index').twitter,
    twitterStats = require('../../models/twitter_stats'),
    twitterFollower = require('../../models/twitter_follower');

var me = twit.stream('user', { track: '@recoverize', language: 'en' });

me.on('follow', function(follower) {

    if (follower.source.screen_name == 'recoverize') {
        return;
    }

    // add new follower to db
    var twFollower = new twitterFollower;
    twFollower.name = follower.source.name;
    twFollower.screenName = follower.source.screen_name;
    twFollower.followersCount = follower.source.followers_count;
    twFollower.statusesCount = follower.source.statuses_count;
    twFollower.location = follower.source.location;
    twFollower.url = follower.source.url;
    twFollower.description = follower.description;
    twFollower.following = follower.following;

    twFollower.save(function(err) {
        if (err) {
            console.error("Couldn't save new follower to database: " + err);
        }
    })

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