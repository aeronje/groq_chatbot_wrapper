// Ron Penones | October 29th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

import readline from "readline";
import Groq from "groq-sdk";
import dotenv from "dotenv";
import { loadMemory, saveMemory, addToHistory } from "./memory.js";

// Dito iyong part kung saan naglo-load tayo ng environment variables mula sa .env file.
dotenv.config();

const client = new Groq({ apiKey: process.env.API_KEY_MO_NA_GALING_KAY_GROQ });
const memory = loadMemory();

// Ganito magiging itsura ng CLI or command line interface once authenticated na ang API key.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Ako> ", // Kapag authenticated na ang API key then ibigsabihin nasa CLI session ka na which means ikaw ito.
});

console.log("Tatay is here. Type 'exit' to end the session.\n"); // Heto rin puede mo rin baguhin iyong returning message kung ano trip mo.
rl.prompt();

rl.on("line", async (input) => {
  const userInput = input.trim();
  if (userInput.toLowerCase() === "exit") {
    console.log("Tatay: “Good. Go for Durian not for Drugs.” 👋");
    process.exit(0);
  }

  try { // Heto iyong part kung saan nagse-send tayo ng request sa Groq API gamit ang chat completion endpoint. Mahalaga ito kasi kahit saan mo bitbitin iyong API key mo, gagana pa rin ang chatbot mo.
    const messages = [
  { role: "system", content: memory.personality },
  ...memory.history.map(({ role, content }) => ({ role, content })),
  { role: "user", content: userInput },
  ];

    const completion = await client.chat.completions.create({
      model: "groq/compound-mini", // Heto iyong model na ginagamit natin sa groq, palitan mo na lang kung trip mo ay ibang supported models https://console.groq.com/docs/models
      messages,
    });

    const reply = completion.choices[0].message.content.trim();
    console.log(`\nTatay> ${reply}\n`); // Heto naman iyong mismong nag-re-response sa iyo.

    addToHistory(memory, "user", userInput);
    addToHistory(memory, "assistant", reply);
  } catch (err) {
    console.error("Error:", err.message);
  }

  rl.prompt();
});
