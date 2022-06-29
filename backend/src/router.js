const express = require("express");

const {
  ProjectsController,
  KeywordsController,
  LanguagesController,
  CommentsController,
  UsersProjectsController,
} = require("./controllers");

const router = express.Router();

router.get("/projects", ProjectsController.browse);
router.get("/projects/:id", ProjectsController.read);
router.put("/projects/:id", ProjectsController.modify);
router.post("/projects", ProjectsController.add);
router.delete("/projects/:id", ProjectsController.delete);

router.get("/keywords", KeywordsController.browse);
router.get("/keywords/:id", KeywordsController.read);
router.post("/keywords", KeywordsController.add);

router.get("/languages", LanguagesController.browse);
router.get("/languages/:id", LanguagesController.read);
router.post("/languages", LanguagesController.add);

router.get("/comments", CommentsController.browse);
router.get("/comments/:id", CommentsController.read);
router.post("/comments", CommentsController.add);

router.get("/usersProjects", UsersProjectsController.browse);
router.get("/usersProjects/Users/:id", UsersProjectsController.read);
router.get(
  "/usersProjects/Projects/:id",
  UsersProjectsController.readByProjectId
);
router.post("/usersProjects", UsersProjectsController.add);
router.delete(
  "/usersProjects/:user_id&:project_id",
  UsersProjectsController.delete
);

module.exports = router;
