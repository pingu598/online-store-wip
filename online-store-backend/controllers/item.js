const itemRouter = require('express').Router()
const Item = require('../models/items')

//Item controller
itemRouter.get('/:id', (request, response) => {
    const id = request.params.id
    Item.findById(id).then(res => {
        response.send(res)
    })   
})

itemRouter.get('/', (request, response) => {
    Item.find({}).then(res => {
        response.send(res)
    })   
})

module.exports = itemRouter