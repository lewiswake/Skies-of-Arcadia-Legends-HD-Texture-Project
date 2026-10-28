# Skies of Arcadia Legends HD Texture Pack

A high-definition texture replacement pack for **Skies of Arcadia Legends** (GameCube) on Dolphin Emulator.

Originally created by **Bighead** and **frozenwings**, continued by Shoopkid.

---

## Download: v0.2.0 (October 2026)

Download releases and modular packages from **[GitHub Releases (v0.2.0)](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.2.0)**.

### Changes in v0.2.0
* **Character Calibrations:** Rebalanced Fina's hand textures to match her natural skin tone, adjusted front bangs across 12 hair textures to match golden-blonde crown lighting, and cleared murky shadow artifacts on flared sleeves.
* **Weapon Restorations:** Reconstructed Aika's starting boomerang handle (restored specular highlights, 4x leather texture, silver rivets) and Vyse's cutlasses (wire hilt sheen, cutting edge specular glints, blade studs).
* **Dolphin DDS Mipmap Fix:** Strict single-mip flags (`-m 1`) on non-mipmapped textures to resolve Dolphin rejection errors; true mipmapped textures (`_m_`) retain full mip chains.
* **Environment Packages Under 2 GB:** Split environment assets into 4 packages (Overworld & Ships, Disc 1 Part 1, Disc 1 Part 2, Disc 2) for easier downloading.
* **BC7 DDS Format:** Converted to DirectDraw Surface format for GPU prefetching and stutter-free Dolphin playback.

---

## Modular Packages

Download packages from [GitHub Releases](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.2.0):
1. **01. UI Assets** (24.8 MB) — Menus, status icons, dialog portraits.
2. **02. Characters & Weapons** (1.0 GB) — Character models and weapons.
3. **03a. Environment &ndash; Overworld & Ships** (800.5 MB) — World map and airships.
4. **03b. Environment &ndash; Disc 1 (Part 1)** (1.8 GB) — Pirate Isle through Valua.
5. **03c. Environment &ndash; Disc 1 (Part 2)** (1.6 GB) — Dungeons, towns, and shrines.
6. **03d. Environment &ndash; Disc 2** (1.4 GB) — Late-game towns, dungeons, and Soltis.
7. **04. Effects** (208.0 MB) — Magic spells and particle effects.
8. **05. Cutscene Artwork** (38.4 MB) — Cutscenes, illustrations, discovery art.

---

## How to Install on Dolphin Emulator

1. **Download Packages:** Download your desired `.7z` packages from [GitHub Releases](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.2.0).
2. **Extract to Dolphin Textures Folder:** Extract with [7-Zip](https://www.7-zip.org/) directly into Dolphin's texture directory (`GEA` folder):
   * **Windows:** `Documents\Dolphin Emulator\Load\Textures\`
   * **macOS:** `~/Library/Application Support/Dolphin/Load/Textures/`
   * **Linux:** `~/.local/share/dolphin-emu/Load/Textures/`
   * *The final path will be `.../Load/Textures/GEA`.*
3. **Enable Custom Textures in Dolphin:**
   * Open Dolphin &rarr; **Graphics** &rarr; **Advanced** tab.
   * Check **Load Custom Textures**.
   * Check **Prefetch Custom Textures** (loads DDS textures directly into GPU VRAM for stutter-free play).
4. **Recommended Backend:** Set backend to **Vulkan** or **Direct3D 11/12** (`Graphics` &rarr; `General`).

---

## Project Roadmap

* **Completed:**
  * **v0.1.0:** Initial texture conversion to BC7 DDS and Dolphin `GEA` folder alignment.
  * **v0.2.0:** Weapon restorations, Fina color calibrations, Dolphin mipmap fixes, and environment packages under 2 GB.
* **In Progress / Planned:**
  * **ISO Texture Dump (71% Complete):** Extracting and deduplicating all 30,412 textures from the GameCube ISO (21,708 unique textures cataloged).
  * **Field & Discoveries (97% Complete):** Finishing remaining field textures, 89 Discovery artworks (`hakken00`&ndash;`hakken89`), and world map chunks (`fiel00`&ndash;`fiel56`).
  * **Remaining Game Areas:** Late-game dungeons, ship battle arenas (`5XX` series), and battle visual effects.

---

## Comparison Gallery

View before-and-after sliders:
**[Comparison Gallery](https://skiesofarcadiahd.xyz/)**

---

## Upscale Methodology

* **Weapons & Characters:** 4x upscale with Topaz Gigapixel AI 'High fidelity' with Photoshop adjustments for specular highlights and edge cleanup.
* **Character Faces:** 2x 'Redefine' + 2x 'High fidelity' + Photoshop airbrushing.
* **Environments:** Topaz Gigapixel AI 'Recover' model.
* **UI:** Redrawn and cleaned up for sharpness.
* **Special Effects:** 4x upscale with Gaussian blur filtering.

---

## Credits

* **Bighead & frozenwings:** Original texture pack creators.
* **Lewis Wake (Shoopkid):** Texture calibration, ISO extraction, AI upscaling, and package maintenance.
* **SEGA / Overworks:** Original creators of Skies of Arcadia.

---

## License
*Fan preservation project. Original game assets belong to SEGA.*
