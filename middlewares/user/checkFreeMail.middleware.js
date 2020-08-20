const { errorStatusEnum: { BAD_REQUEST } } = require("../../constants");
const { userService: { findUserByParams } } = require("../../services");

const { ErrorHandler, errors: { INVALIDEMAIL } } = require("../../errors");

module.exports = async (req, res, next) => {
    try {
        const user = req.body;

        const candidateMail = await findUserByParams({ email: user.email });

        if (candidateMail) {
            throw next(new ErrorHandler(
                INVALIDEMAIL.message,
                BAD_REQUEST,
                INVALIDEMAIL.code,
            ));
        }
        next();
    } catch (e) {
        next();
    }
};
