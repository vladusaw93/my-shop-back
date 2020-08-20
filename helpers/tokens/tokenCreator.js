const jwt = require("jsonwebtoken");

const { emailActionEnum: { USER_REGISTRATION } } = require("../../constants");
const {
    tokenEnum: {
        JWT_SECRET,
        JWT_SECRET_TIME_REG,
    },
} = require("../../constants");

module.exports = (action) => {
    let access_token = "";
    const refresh_token = "";
    switch (action) {
    case (USER_REGISTRATION): {
        access_token = jwt.sign({}, JWT_SECRET, { expiresIn: JWT_SECRET_TIME_REG });
    }
        break;
    default: { break; }
    }

    return {
        access_token,
        refresh_token,
    };
};
