const express = require('express')
const router = express.Router()
const redis = require('../redis')

router.get('/', async (_req, res) => {
    const todoCounter = await redis.getAsync('todoCounter') || 0
    res.json({
        "added_todos": todoCounter
    })
})

module.exports = router