const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

let openai = null;

// Initialize only if API key exists
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

router.post("/", async (req, res) => {
  const { question, query } = req.body;

  if (!question) {
    return res.status(400).json({
      error: "Question required",
    });
  }

  // If no OpenAI key, use fallback immediately
  if (!openai) {
    return res.json({
      hint: generateFallbackHint(query),
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // cheaper + stable
      messages: [
        {
          role: "system",
          content: `
You are a SQL tutor.

STRICT RULES:
- Never provide full SQL solutions.
- Never write full working queries.
- Only give conceptual hints.
- Keep response under 3 sentences.
- Guide, don't solve.
          `,
        },
        {
          role: "user",
          content: `
Question:
${question}

Student Attempt:
${query || "No attempt yet"}

Provide only a helpful hint.
          `,
        },
      ],
      temperature: 0.4,
      max_tokens: 100,
    });

    const hint =
      completion.choices[0]?.message?.content ||
      generateFallbackHint(query);

    res.json({ hint });
  } catch (err) {
    console.error("LLM failed, using fallback");

    res.json({
      hint: generateFallbackHint(query),
    });
  }
});

function generateFallbackHint(query) {
  if (!query || query.trim() === "") {
    return "Start by identifying the correct table and use the SELECT clause.";
  }

  const lower = query.toLowerCase();

  if (!lower.includes("select")) {
    return "Remember that retrieving data begins with the SELECT keyword.";
  }

  if (!lower.includes("from")) {
    return "After SELECT, you must specify the table using FROM.";
  }

  if (!lower.includes("where")) {
    return "Check whether you need to filter results using a WHERE clause.";
  }

  return "Review your SELECT, FROM, and filtering conditions carefully.";
}

module.exports = router;