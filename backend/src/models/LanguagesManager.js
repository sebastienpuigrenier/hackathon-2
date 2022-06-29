const AbstractManager = require("./AbstractManager");

class LanguagesManager extends AbstractManager {
  static table = "languages";

  insert(language) {
    return this.connection.query(
      `insert into ${LanguagesManager.table} (language) values (?)`,
      [language.language]
    );
  }
}

module.exports = LanguagesManager;
