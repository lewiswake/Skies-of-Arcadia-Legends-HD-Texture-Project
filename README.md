# Skies of Arcadia Legends HD Texture Project

A high-definition texture overhaul for **Skies of Arcadia Legends** (GameCube), focusing on modernizing the visual experience while staying true to the original art direction.

Originally started by **Bighead** and **frozenwings**, this project is currently being continued and expanded by **Lewis Wake**.

## 🗺️ Project Roadmap

The project is currently in the **Organization & Optimization Phase**. With 42,495 files totaling 22.7 GB, the focus is on performance and user choice.

### 1. File Organization (Ongoing)
The primary goal is to **Combine** all assets into a clean, modular hierarchy. This allows users to download only the parts of the game they want to upgrade.
* **Characters:** (By Name or Group)
* **UI:** (Maps, Text, Battle UI)
* **Environments:** (By Area and Location)

### 2. Technical Optimization
To ensure the game runs smoothly in the Dolphin Emulator without massive RAM overhead:
* **DDS Conversion:** All PNG assets will be converted to the `.dds` format (DirectDraw Surface).
* **Compression:** Implementing BC7 or BC1-BC3 compression to reduce the 22.7 GB footprint while maintaining "Recover" model quality.
* **Memory Management:** Optimizing for Dolphin’s VRAM usage.

### 3. Distribution
We will provide three distinct downloadable packages in both **DDS (Optimized)** and **PNG (Source)** formats:
* 📦 **Core UI Pack:** High-definition menus, text, and icons.
* 📦 **Character Pack:** HD faces, clothing, and weapons.
* 📦 **Environment Pack:** Full world overhaul by location.

---

## 🚀 Live Demo
You can view the interactive before-and-after comparison gallery here:
**[View the Live Comparison Gallery](https://lewiswake.github.io/Skies-of-Arcadia-Legends-HD-Texture-Project/)**

---

## 🛠 Upscale Process & Methodology

This project utilizes modern AI generative models to recover detail from original low-resolution assets. All textures are upscaled to **4x** their original resolution.

* **Environment Assets:** Upscaled using the **Topaz Gigapixel AI 'Recover'** generative model for maximum texture reconstruction.
* **Character Faces:** Processed via a multi-stage approach:
    1. 2x upscale using 'Redefine' model.
    2. 2x upscale using 'High Fidelity' model.
    3. Manual airbrushing in **Adobe Photoshop** to remove artifacts and enhance clarity.
* **Clothing & Equipment:** 4x upscale using 'High Fidelity' model with manual detail enhancement.
* **UI Elements:** Missing or low-quality UI assets are redrawn from scratch to ensure pixel-perfect clarity.
* **Special Effects:** Textures for fire, clouds, and lighting are upscaled and treated with Gaussian Blur to eliminate pixelation.

---

## 📂 Project Structure

* `/index.html`: The interactive comparison web app.
* `/images/`: Contains the `-before.jpg` and `-after.jpg` comparison pairs.
* `README.md`: Project documentation.

---

## 🤝 Credits & Acknowledgments

* **Bighead & frozenwings:** For the massive foundational work that made this project possible.
* **Lewis Wake:** Project continuation, AI upscaling, and manual retouching.
* **Topaz Labs:** For the Gigapixel AI suite.
* **SEGA / Overworks:** The original creators of Skies of Arcadia.

---

## 📜 License
*Note: This is a fan-made project. All original game assets belong to SEGA. The upscaled textures provided here are for personal use with emulators like Dolphin.*
