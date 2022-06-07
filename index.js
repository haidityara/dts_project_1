'use strict'
const express = require('express')

const app = express()
app.use(express.static(__dirname + '/template'));

app.get('/', (req, res) => {
    // display index.html
    res.sendFile(__dirname + '/template/index.html');
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
