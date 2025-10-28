# groq_chatbot_wrapper
This repository provides a setup for running the Groq compound mini API with Node.js via Bash or PowerShell.
```
aeronje
└── groq_chatbot_wrapper/
    ├── README.md
    ├── memory.js
    ├── package.json
    ├── wrapper.js
    └── .env
```
# Important reminder (English well-mannered version)
Cloning and deploying this repository requires a Groq account. A free‑tier account will get the job done, but a paid or subscription tier is a lot better. Please [sign up](https://console.groq.com/login) using your GitHub or Google account before you clone the repo.

The chatbot’s current personality is set to Daddy Cardboard. If you want to switch it up to match your own vibe, edit line 18 in [memory.js](https://github.com/aeronje/groq_chatbot_wrapper/blob/main/memory.js). Keep your instructions short and to the point—concise as the AI model [Groq/Compound‑Mini](https://console.groq.com/docs/compound/systems/compound-mini) needs to re‑configure itself. Lengthy explanations will only slow it down.

# Important reminder (Taglish tolonges gedli etneb version)
Bes, please naman, [Groq account](https://console.groq.com/login) muna bago clone yawa!

One more thing bes, hindi nobela ang ilalapat mo sa line 18 ng [memory.js](https://github.com/aeronje/groq_chatbot_wrapper/blob/main/memory.js) ha? Bigyan mo lang ng brief context kung paano mo gusto magreply ang chatbot sa iyo.

# Instructions

**Bes, nagbilin na ako sa iyo sabi ko sa iyo huwag mong susubukan kung wala ka pang [Groq account](https://console.groq.com/login), ikaw bahala sinasabi ko sa iyo.**

**If you are using Windows, [please make sure to install git](https://github.com/aeronje/git_setup/blob/main/README.md)**

1. Clone this repository using terminal or Powershell.
   ```
   git clone https://github.com/aeronje/groq_chatbot_wrapper
   ```

2. Just minimize the terminal or powershell after cloning, change directory.
```
cd groq_chatbot_wrapper
```
3. [Install Chocolatey if you are using Winndows, proceed to step 4 if you are using Linux](https://github.com/aeronje/chocolatey_setup)

4. Run the following commands from same terminal in Step 1.

**For Windows**
```
choco install nodejs -y
```
```
choco install npm -y
```
```
nvm install --lts
```
```
nvm alias default lts/*
```
```
node -v
```
```
npm -v
```
```
nvm -v
```
```
npm install groq-sdk dotenv
```
**For Linux**
```
sudo apt install nodejs -y
```
```
sudo apt install npm -y
```
```
nvm install --lts
```
```
nvm alias default lts/*
```
```
node -v
```
```
npm -v
```
```
nvm -v
```
```
npm install groq-sdk dotenv
```
5. Run the wrapper.js from same terminal in Step 1.
```
npm start
```  
# Tech content
Currently in production, but it will be available on the [digital creator page](https://web.facebook.com/profile.php?id=61579310017234) once filming is complete.
