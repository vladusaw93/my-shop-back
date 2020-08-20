const jwt = require("jsonwebtoken");

const { JWT_SECRET, CONFIRMATION } = require("../../constants/token.enum");
const { errors: { INVALIDDATA }, ErrorHandler } = require("../../errors");

const { errorStatusEnum: { BAD_REQUEST } } = require("../../constants");

module.exports = async (req, res, next) => {
    try {
        const token = req.get(CONFIRMATION);

        if (!token) {
            return next(new ErrorHandler(INVALIDDATA.message, BAD_REQUEST, INVALIDDATA.code));
        }

        await jwt.verify(token, JWT_SECRET, (err) => {
            if (err) {
                throw next(new ErrorHandler(
                    INVALIDDATA.message,
                    BAD_REQUEST,
                    INVALIDDATA.code,
                ));
            }
        });

        res.ParamsToFindCandidate = { confirmationToken: token };

        next();
    } catch (e) {
        next(e);
    }
};
