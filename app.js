const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const Routes = require('./routes')
const app = express()

const port = process.env.NODE_ENV || 3000

app.set('port', port)

//load the middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', Routes)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

app.post('/test', (req, res, next) => {
    
    //require the Joi module
    const Joi = require('joi')
    
    //fetch the request data
    const data = req.body;

    // define the validation schema
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        phone: Joi.string().regex(/^\+\d{1,3}\-\d{7,10}?$/).required(),
        birthday: Joi.date().max('1-1-2004').iso()
    })

    //validate the request data against the schema
    Joi.validate(data, schema, (err, value) => {
        console.log(err)
        const id = Math.ceil(Math.random() * 9999999)

        if(err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            })
        } else {
            res.json({
                status: 'success',
                message: 'user created successfully',
                data: Object.assign({id}, value)
            })
        }
    })
})