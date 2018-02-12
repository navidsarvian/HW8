var Twitter = require('twitter');
console.log('this is loaded');

var client = new Twitter({
  consumer_key: '47yaDOPAI0mYTGi5jhGibrne4',
  consumer_secret: 'NiPZ2Kq8toEObeElhBRd9wA5AyarCimmvQeIo0oCsYug8TLZ8e',
  access_token_key: '959931722186989568-2b2WANHIvJUaVARlbj98QAAOZATheQ8',
  access_token_secret: 'O0EDCWfqG1bXP1vBanS0Ak0sEERJcFUriqUnQND88kErc'
});

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '3de2e53cf00446b69736f7a57a9c3f29',
  secret: '43c2d9d72f4140f88f322faadc3149d9'
});

// OMDB access key
var omdb = '40e9cece';

// declaration of multiple exports
module.exports = {
	client,
	spotify,
	omdb
};
