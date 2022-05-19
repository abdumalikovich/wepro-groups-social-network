const express = require("express")
const router = express.Router()
const Users = require("../models/user")

router.patch("/:id", async (req, res) => {
	try {
		const user = await Users.findByIdAndUpdate(req.params.id, req.body)

		res.json(user)
	} catch (error) {
		console.log(error)
		res.json(error)
	}
})

router.post("/", (req, res) => {
	Users.create(req.body, (error, data) => {
		if (error) {
			res.status(500).json({
				ok: false,
				error
			})
		} else {
			res.status(200).json({
				ok: true,
				body: data,
				message: "User created"
			})
		}
	})
})

router.get("/", async (req, res) => {
	try {
		const users = await Users.find()
		res.json(users)
	} catch (error) {
        console.log(error)
		res.json({ message: error })
	}
})

router.get("/:url", async (req, res) => {
	try {
		const user = await Users.findOne({ url: req.params.url })

		await Users.findOneAndUpdate({ url: req.params.url }, {$inc : {'clicks' : 1}}, 
		{new: true})

		res.json(user)
	} catch (error) {
        console.log(error)
		res.json({ message: error })
	}
})

module.exports = router
