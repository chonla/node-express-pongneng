'use strict'

const express = require('./configs/express')
const mongoose = require('./configs/mongoose')
const app = express()

mongoose()

app.listen(3000, () => {
    console.log('server is running on port 3000')
})