const mongoose = require('mongoose')

const Posts = mongoose.Schema(
    {
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true
		},
		content: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true,
		},
		likes: {
			type: Number,
            default: 0
		},
		comments: {
			type: Array,
		},
    }
)

module.exports = mongoose.model('Posts', Posts)
