const Joi = require('joi')
const {
  errorResponse,
} = require("../../config/responseHelper");

const {RESPONSE_CODES} = require('../../config/constants')


function schemaValidator(schema) {
    return [
      async (req, res, next) => {
        try{
        const { body } = req;
        /** Validate Joi schema */

       const result = await schema.validateAsync(body,{abortEarly:true})
       req.body = result
       next()

        }catch(error){
          if(error.isJoi === true){
            // const errorMessages = [];
            // error.details.forEach((err) => {
            //   errorMessages.push(err.message);
            // })
            //return res.status(RESPONSE_CODES.BAD_REQUEST).send(errorResponse(error.details[0].message, null,RESPONSE_CODES.POST ));
            return res.status(RESPONSE_CODES.BAD_REQUEST).json({
              status: 0,
            // message: errorMessages,
            message:error.details[0].message,
            code: RESPONSE_CODES.POST,
            });
          }
        }
      },
    ];
  }
    
  module.exports = schemaValidator;

