const router = require("express").Router();
var { notes } = require("../../db/db");
const { nanoid } = require("nanoid");

router.get("/notes", (req, res) => {
  notes.forEach((note) => {
    if (!note.id) {
      note.id = nanoid(10);
    }
  });
  res.json(notes);
});

router.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == req.params.id) {
      delete notes[i];
    }
  }
  notes = notes.filter(() => true);
  res.json(notes);
});

module.exports = router;
