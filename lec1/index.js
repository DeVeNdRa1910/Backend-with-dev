const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/greet', (req , res) => {
    res.send("Hello Devendra Welcome to Backend")
})

app.get('/twitter' , (req , res) => {
    res.send('Hello Devendra welcome to twitter')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})