'use strict'

const express = require('express')
const BookService = require('../services/book.service')

module.exports = () => {
    const router = express.Router()

    router.get('/users/:name/books', BookService.listBook)
    router.post('/users/:name/books', BookService.createBook)

    return router
}