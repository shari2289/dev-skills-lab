const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");
const skills = require("../models/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
