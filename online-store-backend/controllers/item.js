const itemRouter = require('express').Router()

//TODO: Item controller
itemRouter.get('/', (request, response) => {
    
    response.end("test")
})

module.exports = itemRouter