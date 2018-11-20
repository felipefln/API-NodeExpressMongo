//file mongoose response transform dados in obecjt JS
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://user:password@localhost:2727/myDatabase', {
    useMongoClient: true
})