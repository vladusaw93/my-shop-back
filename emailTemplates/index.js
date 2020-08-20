const { emailActionEnum: { USER_REGISTRATION } } = require("../constants");

module.exports = {
    [USER_REGISTRATION]: {
        subject: "confirm your registration",
        templateFileName: "registartion",
    },

};
