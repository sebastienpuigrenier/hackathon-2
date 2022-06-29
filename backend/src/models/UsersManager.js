const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  findByEmail(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UsersManager.table} (id, firstname, lastname, email, password, fonction, site) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.id,
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.fonction,
        user.site,
      ]
    );
  }

  update(user, id) {
    return this.connection.query(
      `update ${UsersManager.table} set ? where id = ?`,
      [user, id]
    );
  }
}
module.exports = UsersManager;
