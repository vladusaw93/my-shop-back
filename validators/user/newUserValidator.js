const joi = require("joi");
const { EMAIL } = require("../../constants/regex.enum");

module.exports = joi.object().keys({
    name: joi.string().trim().min(3).max(35)
        .required(),
    surname: joi.string().trim().min(3).max(35)
        .required(),
    email: joi.string().regex(EMAIL).required().required(),
    password: joi.string().trim().min(8).required()
        .required(),
    age: joi.number().integer().min(1).max(100)
        .required(),
    phoneNumber: joi.string().min(10).max(10).required(),

});
