'use strict'

const mongoose = require('mongoose')
const User = require('../models/user.model')
const Book = require('../models/book.model')

exports.listBook = (req, res, next) => {
    Book.find((e, book) => {
        if (e) {
            next(e)
        } else {
            res.json(book)
        }
    })
}

exports.createBook = (req, res, next) => {
    User.findOne({
        name: req.params.name
    }, (e, user) => {
        if (e) {
            next(e)
        } else {
            if (user) {
                const book = new Book(req.body)
                book.owner = user._id
                book.save((e, book) => {
                    if (e) {
                        next(e)
                    } else {
                        res.json(book)
                    }
                })
            } else {
                next(new Error('user is not found'))
            }
        }
    })
}