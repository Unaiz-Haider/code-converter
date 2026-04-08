require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;

console.log("API_KEY:", API_KEY);

// 🔥 MAIN ROUTE
app.post("/convert", async (req, res) => {
  try {
    const { code, fromLang, toLang, model } = req.body;

    // default model if not provided
    const selectedModel = model || "openai/gpt-4o-mini";
    console.log("Selected Model:", selectedModel);

    console.log("REQUEST:", { code, fromLang, toLang, selectedModel });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5000",
        "X-Title": "code-converter-app"
      },
      body: JSON.stringify({
        model: selectedModel,
        messages: [
          {
            role: "user",
            content: `Convert ${fromLang} to ${toLang}. Only return clean code without explanation:\n${code}`
          }
        ]
      }),
    });

    const data = await response.json();

    console.log("RESPONSE:", data);

    // ✅ SUCCESS
    if (data.choices && data.choices.length > 0) {
      const output = data.choices[0].message.content;
      res.json({ output });
    } else {
      res.json({ error: data });
    }

  } catch (err) {
    console.error("❌ FULL ERROR:", err);
    console.error("❌ MESSAGE:", err.message);
    console.error("❌ STACK:", err.stack);

    res.status(500).json({
      error: err.message || "Server error"
    });
  }
});

// 🚀 START SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});