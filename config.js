const dotenv = require('dotenv')

dotenv.config()

module.exports = {
	PORT: process.env.PORT,
	DB_URL: 'mongodb://localhost:27017/social_network',
	
	MONGO_LOGIN: process.env.MONGO_LOGIN,
	MONGO_PASSWORD: process.env.MONGO_PASSWORD,
}
