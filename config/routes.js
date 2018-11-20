const express = require('express')

module.exports = function(server) {

    //Routes API

    const router = express.Router()
    server.use('/api', router)

    const itemService = require('../api/itens/itemService')
    itemService.register(router, '/item')
}