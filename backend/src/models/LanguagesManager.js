const AbstractManager = require("./AbstractManager");

class LanguagesManager extends AbstractManager {
  static table = "languages";

  insert(language) {
    return this.connection.query(
      `insert into ${LanguagesManager.table} (language) values (?)`,
      [language.language]
    );
  }

  findAllByProject(projectid) {
    return this.connection.query(
      `SELECT language FROM languages INNER JOIN projects_languages ON projects_languages.language_id = languages.id WHERE project_id = ?`,
      [projectid]
    );
  }
}

module.exports = LanguagesManager;
