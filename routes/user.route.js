'use strict'

const express = require('express')
const UserService = require('../services/user.service')

module.exports = () => {
    const router = express.Router()

    router.get('/users', UserService.listUser)
    router.post('/users', UserService.createUser)
    router.put('/users/:userId', UserService.updateUser)
    router.delete('/users/:userId', UserService.deleteUser)

    return router
}