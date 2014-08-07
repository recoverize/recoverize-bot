var mongoose = require('mongoose');

var twitterFollowerSchema = mongoose.Schema({
    followedAt: { type: Date, default: Date.now },
    name: String,
    screenName: String,
    followersCount: Number,
    statusesCount: Number,
    location: String,
    url: String,
    description: String,
    following: Boolean
});

twitterFollower = mongoose.model('twitterFollower', twitterFollowerSchema);
module.exports = twitterFollower;