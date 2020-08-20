const bcrypt = require("bcrypt");

module.exports = (hashedPass, pass) => bcrypt.compare(pass, hashedPass);
