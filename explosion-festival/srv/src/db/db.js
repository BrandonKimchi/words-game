var redis = require('redis');
var client = redis.createClient(); //creates a new client

client.on('connect', function() {
    console.log('connected');
});

function test() {
    console.log('db test!');
}

module.exports = {
    test,
}