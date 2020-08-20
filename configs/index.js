module.exports = {
    PORT: process.env.PORT || 3001,

    DB_NAME: process.env.DB_NAME || "shop",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "root",
    DB_DIALECT: process.env.DB_DIALECT || "mysql",

    ROOT_EMAIL_SERVICE: process.env.EMAIL_SERVICE || "gmail",
    ROOT_EMAIL_PASS: process.env.EMAIL_PASSWORD,
    ROOT_EMAIL_LOGIN: process.env.EMAIL_LOGIN,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_SECRET_TIME_REG: process.env.JWT_SECRET_TIME_REG,
    FRONTURL: process.env.SITE,
};
