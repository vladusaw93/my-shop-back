const DataBase = require("../../DataBase").getInstance();

module.exports = {
    findUserByParams: (params) => {
        const userModel = DataBase.getModels("User");
        return userModel.findOne({
            where: params,
        });
    },

    createUser: async (newUser) => {
        const userModel = DataBase.getModels("User");
        await userModel.create(newUser);
    },

    getUsers: () => {
        const userModel = DataBase.getModels("User");
        return userModel.findAll({});
    },

    updateUserById: (id, newUserFields) => {
        const userModel = DataBase.getModels("User");

        return userModel.update(
            newUserFields,
            { where: { id } },
        );
    },
};
