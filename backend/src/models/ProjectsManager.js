const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  static table = "projects";

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
      `SELECT projects.name, projects.customer, languages.language, projects.description, projects.goals, users.firstname, users.lastname, keywords.keyword FROM projects 
      INNER JOIN projects_languages ON projects.id = projects_languages.project_id 
      INNER JOIN languages ON projects_languages.language_id = languages.id 
      INNER JOIN users_projects ON projects.id = users_projects.project_id
      INNER JOIN users ON users_projects.user_id = users.id
      INNER JOIN projects_keywords ON projects.id = projects_keywords.project_id
      INNER JOIN keywords ON projects_keywords.keyword_id = keywords.id
      `,
      [id]
    );
  }
}
module.exports = ProjectsManager;
