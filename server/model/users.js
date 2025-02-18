const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profile_pic: {
        type: String,
        require: false
    },
}, { timestamps: true })

module.exports = model("User", userSchema)