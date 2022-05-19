const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParse = require("body-parser")

const config = require('./config')

app.use(cors())
app.use(bodyParse.json())

// Routes
app.use("/users", require("./routes/user"))
app.use("/posts", require("./routes/post"))

app.use("/", (req, res) => {
	res.send(`
	<img src="https://images.unsplash.com/photo-1636114673156-052a83459fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" width="500"/>

	<p>Hello, I am your Prediploma!
	
	<br>
	<br>

	<p>Now we have some models:</p>

	<ul>
		<li><a href="./Users">Users</a></li>
		<li><a href="./Posts">Posts</a></li>
		<li><a href="./Comments">Comments</a></li>
	</ul>

	<br>

	<p>Good luck!</p>

	<br>
	
	v1.1</p>`)
})

// Connect to Database
if (process.env.NODE_ENV === 'production') {
	console.log("PRODUCTION MODE");

	mongoose.connect(`mongodb+srv://shakhabdumalikovich:${config.MONGO_PASSWORD}@cluster0.vnxts.mongodb.net/social_network?retryWrites=true&w=majority`, () => {
		console.log("Ready for fucking!");
	})

	mongoose.set("debug", true)
} else {
	console.log("DEVELOPMENT MODE");
	
	mongoose.connect(`mongodb://localhost:27017/social_network`, () => {
		console.log("Ready for fucking!");
	})

	mongoose.set("debug", true)
}

app.listen(process.env.PORT, () => {
	console.log(`Listening ${process.env.PORT}`);
})