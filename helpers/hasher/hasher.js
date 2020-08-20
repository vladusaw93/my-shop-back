const bcrypt = require("bcrypt");

module.exports = (paramToHash) => bcrypt.hash(paramToHash, 10);
