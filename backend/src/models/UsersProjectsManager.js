const AbstractManager = require("./AbstractManager");

class UsersProjectsManager extends AbstractManager {
  static table = "users_projects";

  insert(usersProject) {
    return this.connection.query(
      `insert into ${UsersProjectsManager.table} (user_id, project_id) VALUES (?, ?)`,
      [usersProject.user_id, usersProject.project_id]
    );
  }

  findByUserId(userId) {
    return this.connection.query(
      `select * from  ${UsersProjectsManager.table} where user_id = ?`,
      [userId]
    );
  }

  findByProjectId(projectId) {
    return this.connection.query(
      `select * from  ${UsersProjectsManager.table} where project_id = ?`,
      [projectId]
    );
  }

  delete(userId, projectId) {
    return this.connection.query(
      `delete from ${UsersProjectsManager.table} where user_id = ? and project_id = ?`,
      [userId, projectId]
    );
  }
}
module.exports = UsersProjectsManager;
