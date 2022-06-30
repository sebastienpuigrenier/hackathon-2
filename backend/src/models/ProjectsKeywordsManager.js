const AbstractManager = require("./AbstractManager");

class ProjectsKeywordsManager extends AbstractManager {
  static table = "projects_keywords";

  insert(projectKeyword) {
    return this.connection.query(
      `insert into ${ProjectsKeywordsManager.table} (keyword_id, project_id) VALUES (?, ?)`,
      [projectKeyword.keyword_id, projectKeyword.project_id]
    );
  }

  findByProjectId(projectId) {
    return this.connection.query(
      `select * from  ${ProjectsKeywordsManager.table} where project_id = ?`,
      [projectId]
    );
  }

  delete(keywordId, projectId) {
    return this.connection.query(
      `delete from ${ProjectsKeywordsManager.table} where keyword_id = ? and project_id = ?`,
      [keywordId, projectId]
    );
  }
}

module.exports = ProjectsKeywordsManager;
