var FB = require('fb');
var request = require('request');
//http://runnable.com/UTlPM1-f2W1TAABY/post-on-facebook
//
//FB.options({
//    appId: '816366145063973',
//    appSecret: '628e2b177d56b3e60cbc1bff4771e100'
//});
//
//FB.api('oauth/access_token', {
//    client_id: '816366145063973',
//    client_secret: '628e2b177d56b3e60cbc1bff4771e100',
//    grant_type: 'ADMINISTRATOR'
//}, function (res) {
//    if(!res || res.error) {
//        console.log(!res ? 'error occurred' : res.error);
//        return;
//    }
//
//    var accessToken = res.access_token;
//    FB.setAccessToken(accessToken);
//});
//
//
////FB.setAccessToken('access_token');
////
//var body = 'My first post using facebook-node-sdk';
//FB.api('me/feed', 'post', { message: body}, function (res) {
//    if(!res || res.error) {
//        console.log(!res ? 'error occurred' : res.error);
//        return;
//    }
//    console.log('Post Id: ' + res.id);
//});