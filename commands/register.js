const users = require('../data/users.json')

module.exports = {
    name: 'register',
    description: 'Register a new user',
    execute(message, args) {
      if (!users[message.author.id]) {
        // TODO: Register a new user
      }
      else {
        message.channel.send('You are already registered.');
      }
	},
}
