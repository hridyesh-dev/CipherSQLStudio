const express = require("express");
const Assignment = require("../models/Assignment");

const router = express.Router();

router.get("/", async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
});

router.get("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    res.json(assignment);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;