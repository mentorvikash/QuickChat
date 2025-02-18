const Route = require("express").Router()
const User = require("./../model/users")
const bcrypt = require("bcrypt")

Route.get("/", async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const user = await User.findOne({ email: email })
        if (user) {
            throw new Error(`User alrady present for ${email}`)
        }

        // encrypt the password.
        const salt = bcrypt.genSalt()

        // if not present create new user
        const newUser = new User({ first_name: firstName, last_name: lastName, email: email, password })

    } catch (error) {

    }
}) 