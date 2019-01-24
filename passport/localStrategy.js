const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		console.log("looking for user");
		
		db.users.findOne({where: { email: email }}).then(function(dbUser) {
			if (!dbUser) {
				return done(null, false, { message: 'Incorrect email' })
			}
			// else if (!dbUser.validPassword(password)) {
			// 	return done(null, false, { message: 'Incorrect password' })
			// }
			console.log(dbUser);
			
			return done(null, dbUser)
		})
	}
)

module.exports = strategy
