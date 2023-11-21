const Joi = require('joi')

export const listAllUser = Joi.object({
    limit:Joi.number().min(0).max(100),
    length:Joi.number(),
    search:Joi.string().trim().optional().allow("",null)
  })