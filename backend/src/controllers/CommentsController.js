const models = require("../models");

class CommentsController {
  static browse = (req, res) => {
    models.comments
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseByProject = (req, res) => {
    const projectId = req.params.id;
    const islimited = req.params.limit;
    models.comments
      .findByProject(projectId, islimited)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.comments
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const comment = req.body;
    models.comments
      .insert(comment)
      .then(([result]) => {
        res.status(201).send({ ...comment, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CommentsController;
