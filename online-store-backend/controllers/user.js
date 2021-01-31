const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

//Register controller
userRouter.post('/', async (request, response, next) => {
    const body = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    
    const user = new User({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        passwordHash: passwordHash,
    })
    try {
        const savedUser = await user.save()
        response.json(savedUser)
    } catch (error) {
        next(error)
    }
})

module.exports = userRouter