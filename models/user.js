const mongoose = require('mongoose')

const Users = mongoose.Schema(
    {
		firstName: {
			type: String,
			required: true
		},
		secondName: {
			type: String,
			required: true,
		},
		username: {
            type: String,
            required: true
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
		},
		lockedAccount: {
			type: Boolean,
		},
		followers: {
			type: Array,
		},
		following: {
			type: Array,
		},
		posts: {
			type: Array,
		},
        // teacherId: {
		// 	type: mongoose.Schema.Types.ObjectId,
        //     ref: "Teachers",
		// 	required: true
        // },
    }
)

module.exports = mongoose.model('Users', Users)
