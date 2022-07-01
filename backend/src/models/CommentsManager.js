const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  static table = "comments";

  findByProject(projectId) {
    return this.connection.query(
      `select comments.comment, comments.creation_date, users.firstname, users.lastname
      FROM  comments
      INNER JOIN users ON users.id = comments.user_id
      WHERE project_id = ?;`,
      [projectId]
    );
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${CommentsManager.table} (comment, user_id, project_id, creation_date) values (?, ?, ?, ?)`,
      [
        comment.comment,
        comment.user_id,
        comment.project_id,
        comment.creation_date,
      ]
    );
  }
}

module.exports = CommentsManager;
