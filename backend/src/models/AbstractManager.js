class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findByEmail(email) {
    return this.connection.query(
      `select id, firstname, lastname, email, fonction, site, password from  ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = AbstractManager;
