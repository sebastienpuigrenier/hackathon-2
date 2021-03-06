const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  static table = "projects";

  findAllOngoing() {
    return this.connection.query(
      `select * from  ${this.table} WHERE status = "in progress"`
    );
  }

  findAllIdea() {
    return this.connection.query(
      `select * from  ${this.table} WHERE status = "idea"`
    );
  }

  findAllFinished() {
    return this.connection.query(
      `select * from  ${this.table} WHERE status = "finished"`
    );
  }

  findAllWithCollaborator(userid) {
    return this.connection.query(
      `select * from  ${this.table} 
      INNER JOIN users_projects ON projects.id = users_projects.project_id
      WHERE users_projects.user_id = ?`,
      [userid]
    );
  }

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectsManager.table} (id, name, description, goals, customer, status, creation_date, update_to_project_date, update_to_finish_date,
  belonging_site, nb_likes, notation, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.id,
        project.name,
        project.description,
        project.goals,
        project.customer,
        project.status,
        project.creation_date,
        null,
        null,
        project.belonging_site,
        0,
        0,
        project.user_id,
      ]
    );
  }

  update(project, id) {
    return this.connection.query(
      `update ${ProjectsManager.table} set ? where id = ?`,
      [project, id]
    );
  }

  findComplete(id) {
    return this.connection.query(
      `SELECT * FROM projects_keywords WHERE project_id="${id}";`,
      [id]
    );
  }

  likeProject(id) {
    return this.connection.query(
      `UPDATE projects SET nb_likes = nb_likes + 1 WHERE id="${id}"`,
      [id]
    );
  }
}
module.exports = ProjectsManager;
