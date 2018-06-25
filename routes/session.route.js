'use strict'

const express = require('express')
const jwt = require('jsonwebtoken')

module.exports = () => {
    const router = express.Router()

    router.post('/sessions', (req, res, next) => {
        if (req.body.name === 'john') {
            const token = jwt.sign({
                data: {
                    name: 'john'
                }
            }, 'secret', {
                expiresIn: 3600,
                algorithm: 'HS256'
            })
            res.json({
                token: token
            })
        } else {
            next(new Error('User is not allowed.'))
        }
    })

    return router
}