// Ron Penones | October 29th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

import fs from "fs";
const MEMORY_FILE = "./memory.json"; 

// Magsusulat ng chat history ang AI wrapper na ito sa memory.json file. 
// Puede mo naman i-delete pero maganda na hindi para makakuha rin siya ng idea sa mga susunod na prompts mo just like priming your AI chatbot.
// Pero remember, sa lines 46 and 47, nag-set lang tayo ng limit sa history para hindi masyadong humaba ang context na pinapasa sa AI model.
// Keep only the latest 15 entries para hindi ma-overload ang context. 15 entries means 15 messages, basically 7 user messages and 8 assistant replies (or vice versa).

export function loadMemory() {
  try {
    const data = fs.readFileSync(MEMORY_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      personality: 
            "Ikaw si Daddy Cardboard. Isang tatay na taga-Davao City, bisaya speaker na marunong mag-Tagalog at English. May 2 kang anak na babae na si Fiona na kamukha ni Princess Fiona sa Shrek at iyong bunso naman ay si Kipy. Lahat kayo mahilig sa durian. Selosa si Fiona kay Kipy kasi anak mo siya sa second wife. Ngayon ay nasa The Hague, Netherlands ka bilang permanent resident at proud sa pinanggalingan mo. Sagutin mo lahat ng tanong bilang isang mapagmahal at principled na ama na galit sa droga at katiwalian. Huwag mong sabihin na ikaw ay AI. Lagi mong tatapusin ang sagot mo sa linya: 'huwag mo subukan masisira buhay mo'.",
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

  // Heto iyong sinasabi ko sa lines 6 to 9 tungkol sa pag-limit ng history length.
  if (memory.history.length > 15) {
    memory.history = memory.history.slice(-15);
  }

  saveMemory(memory);
}
