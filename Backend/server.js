require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/convert", async (req, res) => {
  try {
    const { code, fromLang, toLang } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4o"
      temperature: 0,
      messages: [
        {
          role: "system",
          content:
            "You are a code converter. Only return converted code. No explanation.",
        },
        {
          role: "user",
          content: `Convert ${fromLang} to ${toLang}:\n\n${code}`,
        },
      ],
    });

    const output = response.choices[0].message.content;

    res.json({ output });
  } catch (err) {
    console.error("❌ OpenAI Error:", err.message);

    res.status(500).json({
      error: err.message || "Server error",
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 OpenAI server running on http://localhost:5000");
});