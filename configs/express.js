'use strict'

const express = require('express')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(require('../routes/session.route')())
    app.use(require('../routes/user.route')())
    app.use(require('../routes/book.route')())

    app.use((err, req, res, next) => {
        console.log(err)
        res.status(401)
        res.send(err.message)
    })

    return app
}