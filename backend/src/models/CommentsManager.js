const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  static table = "comments";

  insert(comment) {
    return this.connection.query(
      `insert into ${CommentsManager.table} (comment, user_id, project_id) values (?, ?, ?)`,
      [comment.comment, comment.user_id, comment.project_id]
    );
  }
}

module.exports = CommentsManager;
