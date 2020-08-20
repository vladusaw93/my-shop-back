const { errorStatusEnum: { BAD_REQUEST } } = require("../../constants");
const { userService: { findUserByParams } } = require("../../services");

const { ErrorHandler, errors: { INVALIDPHONENUMBER } } = require("../../errors");

module.exports = async (req, res, next) => {
    try {
        const user = req.body;

        const candidatePhoneNumber = await findUserByParams({ phoneNumber: user.phoneNumber });

        if (candidatePhoneNumber) {
            throw next(new ErrorHandler(
                INVALIDPHONENUMBER.message,
                BAD_REQUEST,
                INVALIDPHONENUMBER.code,
            ));
        }
        next();
    } catch (e) {
        next();
    }
};
