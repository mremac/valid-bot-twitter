var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

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
             T.post('statuses/update', { status: '@' + user.screen_name + ' You are valid! Have a great day! :)' 
         		}, function(err, data, response) {
         	 	console.log(data)
		 		})
       })
      }
    })
