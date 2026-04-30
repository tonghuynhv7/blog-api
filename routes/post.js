const express = require("express");
const router = express.Router();

let posts = [];

router.get("/", (req, res) => {
  res.json(posts);
});

router.post("/", (req, res) => {
  const post = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };
  posts.push(post);
  res.json(post);
});

router.delete("/:id", (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;