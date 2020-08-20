const Sequelize = require("sequelize");

const fs = require("fs");
const path = require("path");
const {
  DB_NAME, DB_HOST, DB_USER, DB_PASSWORD,DB_DIALECT,
} = require("../configs");

module.exports = (() => {
  let instance;

  function InitConnection() {
    const client = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: DB_DIALECT,
    });

    const models = {};

    function getModels() {
      fs.readdir(path.join(process.cwd(), "DataBase", "models"), (error, file) => {
        file.forEach((file) => {
          const [modelName] = file.split(".");
          models[modelName] = client.import(path.join(process.cwd(), "DataBase", "models", modelName));
        });
      });
    }

    return {
      setModels: () => getModels(),
      getModels: (modelName) => models[modelName],
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = InitConnection();
      }
      return instance;
    },
  };
})();
