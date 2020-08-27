const Skills = require("../models/skills");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect("/skills");
}

function create(req, res) {
  Skills.create(req.body);
  res.redirect("/skills");
}

function newSkill(req, res) {
  res.render("skills/new");
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll(),
    time: req.time,
  });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skills.getOne(req.params.id),
    skillsNum: req.prams.id,
  });
}
