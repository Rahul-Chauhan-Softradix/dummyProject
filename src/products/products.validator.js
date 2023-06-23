const Joi = require('joi')

export const addProduct = Joi.object({
    product_name:Joi.string().required(),
    price:Joi.number().required()
})