import Joi from 'joi'

export const addOrder = Joi.object({
    product_id:Joi.string().required(),
    user_id:Joi.number().required(),
    product_id:Joi.number().required(),
    quantity:Joi.number().min(1).required(),
})