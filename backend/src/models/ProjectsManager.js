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
  /*
  {
    back 23:46:22   id: '624788dc-9d78-42a5-9427-ad68bed63dfe',    
    back 23:46:22   firstname: 'Eugene',
    back 23:46:22   lastname: 'Dostie',
    back 23:46:22   email: 'eugenedostie@apside.com',
    back 23:46:22   site: 'Apside Berlin',
    back 23:46:22   status: 'idea',
    back 23:46:22   creation_date: '2022-06-29',
    back 23:46:22   belonging_site: 'Apside Berlin',
    back 23:46:22   name: 'fsg',
    back 23:46:22   customer: 'sfg',
    back 23:46:22   languages: 'sfg',
    back 23:46:22   keywords: 'sfg',
    back 23:46:22   description: 'sfdg',
    back 23:46:22   goals: 'sfg'
    back 23:46:22 } */

  update(project, id) {
    return this.connection.query(
      `update ${ProjectsManager.table} set ? where id = ?`,
      [project, id]
    );
  }
}
module.exports = ProjectsManager;
