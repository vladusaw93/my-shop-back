const { userService, mailService: { sendMail } } = require("../../services");

const { ErrorHandler, errors: { INVALIDDATA, USERCONFIRMED } } = require("../../errors");
const { hashers: { hasher }, tokens: { tokenCreator } } = require("../../helpers");
const { FRONTURL } = require("../../configs");

const {
    emailActionEnum: { USER_REGISTRATION },
    errorStatusEnum: { BAD_REQUEST },
} = require("../../constants");

module.exports = {

    createUser: async (req, res) => {
        const user = req.body;
        user.password = await hasher(user.password);

        const { access_token: token } = tokenCreator(USER_REGISTRATION);
        user.confirmationToken = token;

        await sendMail(user.email, USER_REGISTRATION, { user, FRONTURL, token });
        await userService.createUser(user);
        res.json(user).end();
    },

    getUsers: async (req, res) => {
        const allUsers = await userService.getUsers();
        res.json(allUsers).end();
    },

    confirmUser: async (req, res, next) => {
        try {
            const { id, status } = await userService.findUserByParams(res.ParamsToFindCandidate);

            const confirmParams = {
                status: true,
                confirmationToken: null,
            };

            if (status) {
                return next(new ErrorHandler(
                    INVALIDDATA.message,
                    BAD_REQUEST,
                    INVALIDDATA.code,
                ));
            }
            await userService.updateUserById(id, confirmParams);
            res.end();
        } catch (e) {
            return next(new ErrorHandler(
                USERCONFIRMED.message,
                BAD_REQUEST,
                USERCONFIRMED.code,
            ));
        }
    },
};
