'use strict'

const jwt = require('jsonwebtoken')

exports.verify = (req, res, next) => {
    const token = req.headers['x-auth-token']
    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                next(err)
            } else {
                req.user = decodedToken
                next()
            }
        })
    } else {
        next(new Error('You are not allowed.'))
    }
}