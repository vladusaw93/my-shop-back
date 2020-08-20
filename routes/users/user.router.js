const { Router } = require("express");

const {
    userMiddlewares:
        {
            checkFreeMail,
            checkFreePhoneNumber,
            checkNewUserValidity,
            checkConfirmation,
        },
} = require("../../middlewares");

const userRouter = Router();
const { userController } = require("../../controllers");

userRouter.get("/", userController.getUsers);
userRouter.post("/registration",
    checkNewUserValidity,
    checkFreeMail,
    checkFreePhoneNumber,
    userController.createUser);

userRouter.post("/confirm", checkConfirmation, userController.confirmUser);

module.exports = userRouter;
