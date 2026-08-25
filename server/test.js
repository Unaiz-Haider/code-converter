require(dotenv).config();

const fetch = require("node-fetch");

const API_KEY = process.env.OPENROUTER_API_KEY;

async function run() {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: "Convert Python to JavaScript: print('Hello World')"
                }
            ]
        }),
    });

    const data = await response.json();

    console.log("FULL RESPONSE:", data);
}

run();