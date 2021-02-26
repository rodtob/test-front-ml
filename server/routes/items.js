var express = require('express')
var router = express.Router()
var apiController = require('../controllers/apiController.js')


router.get('/items?q=:query', apiController.findAll )

router.get('/items/:id', apiController.findById )

module.exports = router;