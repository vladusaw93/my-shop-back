const joi = require("joi");
const { errorStatusEnum: { BAD_REQUEST } } = require("../../constants");

const { ErrorHandler, errors: { INVALIDUER } } = require("../../errors");

const { userValidators: { newUserValidator } } = require("../../validators");

module.exports = async (req, res, next) => {
    try {
        const user = req.body;
        const { error } = await joi.validate(user, newUserValidator);

        if (error) {
            throw next(new ErrorHandler(
                INVALIDUER.message,
                BAD_REQUEST,
                INVALIDUER.code,
            ));
        }
        next();
    } catch (e) {
        next();
    }
};
