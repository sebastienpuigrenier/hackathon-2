const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";
}

module.exports = UsersManager;
