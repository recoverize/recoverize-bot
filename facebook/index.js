var FB = require('fb');

FB.options({
    appId: '816366145063973',
    appSecret: '628e2b177d56b3e60cbc1bff4771e100'
});

FB.setAccessToken('access_token');
//
//var body = 'My first post using facebook-node-sdk';
//FB.api('me/feed', 'post', { message: body}, function (res) {
//    if(!res || res.error) {
//        console.log(!res ? 'error occurred' : res.error);
//        return;
//    }
//    console.log('Post Id: ' + res.id);
//});