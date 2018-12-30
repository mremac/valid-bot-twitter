
var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);

T.get('followers/list', {
	user_id: 1079435515596812290,
	screen_name: 'BotValid'
	}, function (err, response) {
           if (err) {
             console.log('Something went wrong while getting followers. Error: ', err)
           }
           if (response) {
           	 console.log(response)
             response.users.forEach((user) => {
             console.log('tweeting at ' + user.screen_name)
             T.post('statuses/update', { status: '@' + user.screen_name + ' You are super valid! Have a great day! :) (ValidBot:' + formatted 
         		}, function(err, data, response) {
         	 	console.log(data)
		 		})
       })
      }
    })
