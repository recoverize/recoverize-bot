/*
 * Make and export database connection
 */
var mongoose = require('mongoose');

var mongoUrl =  'mongodb://heroku:z4TB4_rvaa7wfDb96J8fe7bAvtTrcw-fpf5PkxiAyHp_MutpJqxm31QOrZvR4BqGO7NP4Me89GuNn6vXr5Skrw@kahana.mongohq.com:10083/app27908663';
var uriString = process.env.MONGOHQ_URL || mongoUrl;

mongoose.connect(uriString, function(err, res) {
    if (err) {
        console.error('Error: ' + err);
    } else {
        console.log('RB: Connected to database');
    }
});

module.exports = mongoose.connection;


/*
 *  Initialize collections that will only have one document
 */

