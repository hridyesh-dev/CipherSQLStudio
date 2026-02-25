const express = require("express");
const pool = require("../config/postgres");

const router = express.Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query required" });
  }

  const lower = query.toLowerCase().trim();

  const forbidden = [
    "drop",
    "delete",
    "update",
    "insert",
    "alter",
    "truncate",
  ];

  if (!lower.startsWith("select")) {
    return res.status(400).json({
      error: "Only SELECT queries allowed",
    });
  }

  for (let word of forbidden) {
    if (lower.includes(word)) {
      return res.status(400).json({
        error: "Unsafe query detected",
      });
    }
  }

  try {
    const result = await pool.query(query);
    res.json({ rows: result.rows });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;