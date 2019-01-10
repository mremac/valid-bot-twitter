
var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);

var adjex = ['super', 'extremely', 'totally', 'absurdly', 'powerfully', 'mega', 'ultra', 'especially', 'contagiously'];

T.get('followers/list', {
	user_id: 1079435515596812290,
	screen_name: 'BotValid'
	}, function (err, response) {
           if (err) {
             console.log('Something went wrong while getting followers. Error: ', err, err.errors)
           }
           if (response) {
           	 console.log(response)
             response.users.forEach((user) => {
             console.log('tweeting at ' + user.screen_name)
             var randomNumber = Math.floor(Math.random()*adjex.length)
             T.post('statuses/update', { status: '@' + user.screen_name + ' You are ' + adjex[randomNumber] + ' valid! Have a great day! :) (ValidBot:' + formatted + ')'
         		}, function(err, data, response) {
         	 	console.log(data)
		 		})
       })
      }
    })
