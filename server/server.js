let app = require("./app")
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send("this is RESPONSE ")
})

app.listen(port, () => {
    console.log(`server is listning at http://localhost:${port}`)
})