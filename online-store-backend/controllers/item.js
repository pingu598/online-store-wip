const itemRouter = require('express').Router()

//Item controller
itemRouter.get('/', (request, response) => {
    
    response.end("test")
})

module.exports = itemRouter