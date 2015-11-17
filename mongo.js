/*
 * Make and export database connection
 */
var mongoose = require('mongoose');

var uriString = process.env.MONGOHQ_URL || mongoUrl;

mongoose.connect(uriString, function(err, res) {
    if (err) {
        console.error('Error: ' + err);
    } else {
        console.log('RB: Connected to database');
    }
});

module.exports = mongoose.connection;
