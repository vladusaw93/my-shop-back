const { Router } = require("express");

// const { authController } = require("../../controllers");
// const { userMiddlewares: { newUser } } = require("../../middlewares");

const authRouter = Router();

// authRouter.post("/login", authController.login);
// authRouter.post("/registration", newUser, authController.createUser);

module.exports = authRouter;
