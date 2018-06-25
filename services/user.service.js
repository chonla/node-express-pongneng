'use strict'

const User = require('../models/user.model')

exports.listUser = (req, res, next) => {
    User.find()
        .populate('books')
        .exec((e, user) => {
            if (e) {
                next(e)
            } else {
                res.json(user)
            }
        })
}

exports.createUser = (req, res, next) => {
    User.create(req.body, (e, user) => {
        if (e) {
            next(e)
        } else {
            res.json(user)
        }
    })
}

exports.updateUser = (req, res, next) => {
    User.findOneAndUpdate({
        _id: req.params.userId
    }, {
        name: req.body.name
    }, {
        new: true
    }, (e, user) => {
        if (e) {
            next(e)
        } else {
            res.json(user)
        }
    })
}

exports.deleteUser = (req, res, next) => {
    User.remove({
        _id: req.params.userId
    }, (e, user) => {
        if (e) {
            next(e)
        } else {
            res.json(user)
        }
    })
}