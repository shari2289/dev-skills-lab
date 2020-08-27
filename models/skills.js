const skills = [
  { id: 702289, skill: "JavaScript", level: false },
  { id: 030407, skill: "CSS", level: false },
  { id: 120808, skill: "HTML", level: false },
  { id: 041067, skill: "Node.js", level: false },
  { id: 091200, skill: "Basketball Watching", level: true },
  { id: 220703, skill: "Book Reading", level: true },
  { id: 092985, skill: "Parenting", level: true },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 100000000;
  skill.done = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skills) => skills.id === parseInt(id));
}
