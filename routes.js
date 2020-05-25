const express = require('express')
const router = express.Router()

//generic router handler

const genericHandler = (req, res, next) => {
    res.json({
        status: 'success',
        data: req.body
    })
}

// create a new teacher or student
router.post('/people', genericHandler)

router.post('/auth/edit', genericHandler)

// accept fee payments for students
router.post('/fees/pay', genericHandler)

router.get('/', genericHandler)

module.exports = router
