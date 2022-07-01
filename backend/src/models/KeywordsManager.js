const AbstractManager = require("./AbstractManager");

class KeywordsManager extends AbstractManager {
  static table = "keywords";

  insert(Keywords) {
    return this.connection.query(
      `insert into ${KeywordsManager.table} (keyword) values (?)`,
      [Keywords.keyword]
    );
  }

  findAllByProject(projectid) {
    return this.connection.query(
      `SELECT keyword FROM keywords INNER JOIN projects_keywords ON projects_keywords.keyword_id = keywords.id WHERE project_id = ?`,
      [projectid]
    );
  }
}

module.exports = KeywordsManager;
