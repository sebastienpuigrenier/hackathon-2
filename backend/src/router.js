const express = require("express");

const {
  UsersController,
  ProjectsController,
  KeywordsController,
  LanguagesController,
  CommentsController,
  UsersProjectsController,
  ProjectsLanguagesController,
  ProjectsKeywordsController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.get("/users", UsersController.browse);
router.get("/users/byproject/:id", UsersController.browseByProject);
router.get("/user/creator/:id", UsersController.browseCreator);
router.get("/users/:id", UsersController.read);
router.get("/users/email/:email", UsersController.readByEmail);
router.post("/users", UsersController.add);
router.delete("/users/:id", UsersController.delete);

router.get("/projects", ProjectsController.browse);
router.get("/projects/ongoing/", ProjectsController.browseOngoing);
router.get("/projects/idea/", ProjectsController.browseIdea);
router.get("/projects/finished/", ProjectsController.browseFinished);
router.get("/projects/:id", ProjectsController.read);
router.get("/projects/complete/:id", ProjectsController.readComplete);
router.put("/projects/:id", ProjectsController.modify);
router.put("/projects/like/:id", ProjectsController.modifyLike);
router.post("/projects", ProjectsController.add);
router.delete("/projects/:id", ProjectsController.delete);

router.get("/keywords", KeywordsController.browse);
router.get("/keywords/byproject/:id", KeywordsController.browseByProject);
router.get("/keywords/:id", KeywordsController.read);
router.post("/keywords", KeywordsController.add);

router.get("/languages", LanguagesController.browse);
router.get("/languages/byproject/:id", LanguagesController.browseByProject);
router.get("/languages/:id", LanguagesController.read);
router.post("/languages", LanguagesController.add);

router.get("/comments", CommentsController.browse);
router.get("/comments/project/:id", CommentsController.browseByProject);
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

router.get("/projectsLanguages", ProjectsLanguagesController.browse);
router.get("/projectsLanguages/projects/:id", ProjectsLanguagesController.read);
router.post("/projectsLanguages", ProjectsLanguagesController.add);
router.delete(
  "/projectsLanguages/:language_id&:project_id",
  ProjectsLanguagesController.delete
);

router.get("/projectsKeywords", ProjectsKeywordsController.browse);
router.get("/projectsKeywords/projects/:id", ProjectsKeywordsController.read);
router.post("/projectsKeywords", ProjectsKeywordsController.add);
router.delete(
  "/projectsKeywords/:keywords_id&:project_id",
  ProjectsKeywordsController.delete
);

router.post("/auth", AuthController.session);
router.get("/auth/logout", AuthController.logout);

module.exports = router;
