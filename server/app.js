const express = require('express')
const app = express()
const port = 4000;

app.get("/home", (req, res) => {
    res.status(200).send("this is server response")
})

app.listen((port, () => {
    console.log("server is running at port: " + port)
}))