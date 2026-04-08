// 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   openROuter




const fetch = require("node-fetch");

const API_KEY = "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";

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