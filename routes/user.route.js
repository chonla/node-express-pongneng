'use strict'

const express = require('express')
const UserService = require('../services/user.service')
const auth = require('../routes/auth')

module.exports = () => {
    const router = express.Router()

    router.get('/users', UserService.listUser)
    router.post('/users', UserService.createUser)
    router.put('/users/:userId', UserService.updateUser)
    router.delete('/users/:userId', auth.verify, UserService.deleteUser)

    return router
}