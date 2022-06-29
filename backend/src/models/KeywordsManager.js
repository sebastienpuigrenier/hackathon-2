const AbstractManager = require("./AbstractManager");

class KeywordsManager extends AbstractManager {
  static table = "keywords";

  insert(Keywords) {
    return this.connection.query(
      `insert into ${KeywordsManager.table} (keyword) values (?)`,
      [Keywords.keyword]
    );
  }
}

module.exports = KeywordsManager;
