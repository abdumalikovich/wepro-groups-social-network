const express = require("express")
const router = express.Router()
const Posts = require("../models/post")

router.patch("/:id", async (req, res) => {
	try {
		const post = await Posts.findByIdAndUpdate(req.params.id, req.body)

		res.json(post)
	} catch (error) {
		console.log(error)
		res.json(error)
	}
})

router.post("/", (req, res) => {
	Posts.create(req.body, (error, data) => {
		if (error) {
			res.status(500).json({
				ok: false,
				error
			})
		} else {
			res.status(200).json({
				ok: true,
				body: data,
				message: "post created"
			})
		}
	})
})

router.get("/", async (req, res) => {
	try {
		const posts = await Posts.find().populate("userId")
		res.json(posts)
	} catch (error) {
        console.log(error)
		res.json({ message: error })
	}
})

router.get("/:url", async (req, res) => {
	try {
		const post = await Posts.findOne({ url: req.params.url })

		await Posts.findOneAndUpdate({ url: req.params.url }, {$inc : {'clicks' : 1}}, 
		{new: true})

		res.json(post)
	} catch (error) {
        console.log(error)
		res.json({ message: error })
	}
})

module.exports = router
