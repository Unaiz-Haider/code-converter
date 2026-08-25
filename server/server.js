require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
const hljs = require("highlight.js");

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173/",
    "X-Title": "Code Converter",
  },
});

app.post("/convert", async (req, res) => {
  try {
    const { code, toLang } = req.body;


    // Detect source language using AI
    const detectLanguage = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
                    You are an expert programming language detector and code converter.
                    
                    Your tasks are:

                    1. Detect the programming language of the input code.
                    2. Convert the code to the requested language.
                    3. Return ONLY valid JSON.

                    Rules:
                    - Do not explain anything.
                    - Do not use markdown.
                    - Do not use triple backticks.
                    - Preserve comments.
                    - Preserve the logic.
                    - Output valid JSON only.

                    The JSON format must be EXACTLY:
                    
                    {
                      "detectedLanguage": "python",
                      "output": "converted code here"
                    }

                    `,
        },
        {
          role: "user",
          content: `Convert the following code to ${toLang}.
                            
          ${code}`,
        },
      ],
    });


    let result;

    try {
      result = JSON.parse(
        detectLanguage.choices[0].message.content.trim()
      );
    } catch (e) {
      return res.status(500).json({
        error: "Model returned invalid JSON",
      });
    }

    const fromLang = result.detectedLanguage.trim().toLowerCase();
    let output = result.output.trim();


    
    // Remove markdown code fences if the model still returns them
    if (output.startsWith("```")) {
      output = output
        .replace(/^```[a-zA-Z0-9_-]*\n?/, "")
        .replace(/\n?```$/, "")
        .trim();
    }

    res.json({
      detectedLanguage: fromLang,
      output,
    });

    console.log("Detected Language:", fromLang);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 OpenRouter server running on http://localhost:5000");
});