const express = require('express')
const router = express.Router()

const SchemaValidator = require('./middlewares/SchemaValidator')

const validateRequest = SchemaValidator(true)

//generic router handler

const genericHandler = (req, res, next) => {
    res.json({
        status: 'success',
        data: req.body
    })
}

// create a new teacher or student
router.post('/people', validateRequest, genericHandler)

router.post('/auth/edit', validateRequest, genericHandler)

// accept fee payments for students
router.post('/fees/pay', validateRequest, genericHandler)

router.get('/', genericHandler)

module.exports = router
