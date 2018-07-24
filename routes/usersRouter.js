const usersRouter = require('express').Router()
const {getAllUsers, getUserByUsername} = require('../controllers')

usersRouter.route('/')
    .get(getAllUsers)

usersRouter.route('/:username')
    .get(getUserByUsername)

module.exports = {usersRouter}