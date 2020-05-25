const Joi = require('joi')

const any = Joi.any()

const catOrDog = Joi.any().valid(['cat', 'dog']).required()

const email = Joi.string().email().lowercase().required()

const password = Joi.string().min(7).alphanum().required()

const phone = Joi.string().regex(/^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/).default('111-222-3333')

const amount = Joi.number().positive().precision(2).required()

const age = Joi.number().greater(13).integer().positive()

const since = Joi.date().min('1-1-2017').iso().required()

const timestamps = Joi.date().timestamp('javascript')

// object schemas:

// method 1 object literal

const schema1 = {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().integer().greater(10)
}

//method 2 using joi object

const schema2 = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().integer().greater(10)
})

// Method 3: (Using Joi.object().keys())
const schema3 = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().integer().greater(10)
});

const schemaPattern = Joi.object({}).pattern(/^([a-z]+)(_[a-z]+)*?_at$/, Joi.date().max('now').iso().required())



