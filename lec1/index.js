require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000
//3000 port hamare laptop me free hai but ho sakta hai ki user ka port 3000 busy ho there for we put it into .env file
//jaha bhi use karna hai baha   process.env.var_name
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/greet', (req , res) => {
    res.send("Hello Devendra Welcome to Backend")
})

app.get('/twitter' , (req , res) => {
    res.send('Hello Devendra welcome to twitter')
})

app.get('/youtube' , (req , res) => {
    res.send('<h1>Enjoye Backend with chai</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//sensitive information like(ID password of DB) we push these variable(like PORT) into .env file