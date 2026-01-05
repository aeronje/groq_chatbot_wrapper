// Ron Penones | October 30th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

import fs from "fs";
import { buildPersonality } from "./personality.js";  // Ang personality.js ang central brain ng AI chatbot na ito.
const MEMORY_FILE = "./memory.json";

// Magsusulat ng chat history ang AI wrapper na ito sa memory.json file. 
// Puede mo naman i-delete pero maganda na hindi para makakuha rin siya ng idea sa mga susunod na prompts mo just like priming your AI chatbot.
// Pero remember, sa lines 47 and 48, nag-set lang tayo ng limit sa history para hindi masyadong humaba ang context na pinapasa sa AI model.
// Keep only the latest 15 entries para hindi ma-overload ang context. 15 entries means 15 messages, basically 7 user messages and 8 assistant replies (or vice versa).

export function loadMemory() {
  try {
    const data = fs.readFileSync(MEMORY_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    // Fallback personality galing sa personality.js file.
    return {
      personality: buildPersonality(),
      history: [],
    };
  }
}

export function saveMemory(memory) {
  fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2));
}

export function addToHistory(memory, role, content) {
  const now = new Date();
  
  // Magsusulat ng petsa at oras (YYYY-MM-DD HH:mm:ss) according sa timezone kung saan running ang NodeJs.
  const timestamp = now.toLocaleString("en-US", {
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  const entry = {
    role,
    content,
    timestamp
  };

  memory.history.push(entry);

  // Heto iyong sinasabi ko sa lines 7 to 10 tungkol sa pag-limit ng history length.
  if (memory.history.length > 15) {
    memory.history = memory.history.slice(-15);
  }

  saveMemory(memory);
}
