# Stroke Companion AI 🧠💙

![Stroke Companion UI Banner](https://via.placeholder.com/1200x400.png?text=Stroke+Companion+AI+Dashboard)

## 📖 Overview
**Stroke Companion AI** is a specialized, web-based healthcare application tailored to support stroke survivors through their rehabilitation journey at home. The application provides daily exercise routines, medication reminders, an empathetic AI Chatbot, and an AAC Text-to-Speech board specifically designed for stroke survivors with language or speech difficulties (aphasia).

## ✨ Features
- **Dynamic Dashboard:** Track your recovery streak, daily progress ring, and medication adherence in real time.
- **Aphasia Speech Assistant (AAC):** A dedicated visual communication board with 8 essential daily needs cards (Water, Pain, Rest, Medicine, Bathroom, Caregiver, Yes, No). Tapping any card activates Text-to-Speech (`window.speechSynthesis`) to speak out loud for patients with speech impairments.
- **5 Interactive Guided Exercises:** High-contrast exercise cards featuring custom AI-generated medical illustrations for:
  - Finger Grip Practice
  - Shoulder Stretch
  - Wrist Rotation
  - Seated Ankle Pumps
  - Knee Extension
- **Empathetic AI Companion:** A floating chat assistant that listens to user situations, provides warm encouragement, recommends relevant physical therapy routines, and gently clarifies its supportive role.
- **Hybrid Data Architecture:** Built with Firebase Web SDK (v9) integration and automatic, robust `localStorage` fallback to guarantee 100% error-free data persistence across browser reloads.
- **Medical Disclaimers:** Prominently featured disclaimers ensuring the app clearly position itself as a supportive daily assistant rather than a replacement for a medical doctor.

## 🛠️ Tech Stack
- **Frontend:** HTML5, Vanilla JavaScript (ES Modules), CSS3
- **Styling:** Tailwind CSS (via CDN), Google Fonts (Public Sans)
- **Icons & Graphics:** Google Material Symbols, Custom Medical Vector Illustrations
- **Audio & Accessibility:** Native Web Speech API (`SpeechSynthesis`)
- **Backend Sync:** Firebase Cloud Firestore SDK v9 with LocalStorage Fallback

## 🚀 Getting Started

This application has been engineered to run completely locally without needing any backend server installations or node modules!

1. **Download or Clone the Repository**.
2. Open the `stroke care` folder.
3. Double-click on **`index.html`** to open it instantly in your default web browser.

## 📂 Project Structure
```text
stroke care/
├── index.html       # The complete Single Page Application (UI + Logic + Firebase/TTS)
├── README.md        # Detailed project documentation
└── ... (generated assets)
```

## 🧠 Medical Safety & Disclaimer
Stroke Companion AI is designed strictly as a supportive tool for physical therapy adherence and daily motivation. It is **not a medical device or a replacement for a physician**. Users are advised to consult their doctor or physical therapist for medical advice, prescriptions, and diagnosis.

---
*Created with care for stroke recovery support.*
