const express = require('express')

const { returnUsers, createUsers,} = require('../controllers/usuario')

const router = express.Router()

router.get('/api/users', returnUsers)
router.post('/api/users', createUsers)

module.exports = router