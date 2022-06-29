const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  static table = "projects";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectsManager.table} (id, name, description, customer, status, creation_date, update_to_project_date, update_to_finish_date,
  belonging_site, nb_likes, notation, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.id,
        project.name,
        project.description,
        project.customer,
        project.status,
        project.creation_date,
        project.update_to_project_date,
        project.update_to_finish_date,
        project.belonging_site,
        project.nb_likes,
        project.notation,
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
}
module.exports = ProjectsManager;
