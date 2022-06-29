const express = require("express");

const { AuthController, ItemController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/auth", AuthController.session);
router.post("/auth/logout", AuthController.logout);

module.exports = router;
