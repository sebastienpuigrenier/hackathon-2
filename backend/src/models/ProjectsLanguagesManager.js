const AbstractManager = require("./AbstractManager");

class ProjectsLanguagesManager extends AbstractManager {
  static table = "projects_languages";

  insert(projectLanguage) {
    return this.connection.query(
      `insert into ${ProjectsLanguagesManager.table} (language_id, project_id) VALUES (?, ?)`,
      [projectLanguage.language_id, projectLanguage.project_id]
    );
  }

  findByProjectId(projectId) {
    return this.connection.query(
      `select * from  ${ProjectsLanguagesManager.table} where project_id = ?`,
      [projectId]
    );
  }

  delete(languageId, projectId) {
    return this.connection.query(
      `delete from ${ProjectsLanguagesManager.table} where language_id = ? and project_id = ?`,
      [languageId, projectId]
    );
  }
}

module.exports = ProjectsLanguagesManager;
