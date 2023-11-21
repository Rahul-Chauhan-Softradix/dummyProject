const Joi = require('joi')

const registerValidator = Joi.object({
  first_name: Joi.string().pattern(new RegExp(/^[a-z,A-Z]{2,100}$/)).trim().required().messages({"any.required":"First name is required","string.empty":"First name is required",  "string.pattern.base": "First name should be a letter only"}),
  last_name:Joi.string().min(2).max(200).trim().required().messages({"any.required":"Last name is required","string.required":"Last name is required"}),
   gender:Joi.string().optional().valid("male","female"),
   email: Joi.string().max(50).email().message("Please enter valid email").lowercase().trim().required().messages({"any.required":"Email is required","string.empty":"Email is required"}),
   phone_number: Joi.string().pattern(new RegExp(/^[0-9]{10}$/)).required().messages({"any.required":"Phone number is required","string.empty":"Phone number is required",  "string.pattern.base": "Phone number must be of 10 digits"}),
   password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)).message("Please enter strong password").required().messages({"any.required":"Password is required","string.empty":"Password is required"})
})

const loginValidator = Joi.object({
  email:Joi.string().email().message("Please enter valid email").trim().required().messages({"any.required":"Email is required","string.required":"Email is required"}),
  password:Joi.string().required().messages({"any.required":"Password is required","string.required":"Password is required"})
})

const forgotPasswordValidator = Joi.object().keys({
  email: Joi.string().email().max(50).required(),
})
 
const resetPasswordValidator =  Joi.object().keys({
  password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)).message("please enter strong password").required()
})


module.exports = {registerValidator,loginValidator,forgotPasswordValidator,resetPasswordValidator}