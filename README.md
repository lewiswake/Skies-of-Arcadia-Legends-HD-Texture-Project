# Skies of Arcadia Legends HD Texture Pack

A high-definition texture replacement pack for **Skies of Arcadia Legends** (GameCube) on Dolphin Emulator.

Originally created by **Bighead** and **frozenwings**, continued, expanded, and curated by **Shoopkid**.

---

## Download: v0.3.0 (November 2026)

Download releases and modular packages from **[GitHub Releases (v0.3.0)](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.3.0)**.

### Changes in v0.3.0
* **100% ISO Archive Coverage (31,010 Textures):** Full 4x upscale and curation across all game files dumped directly from the raw GameCube disc image.
* **Alpha Channel & Ghost Haze Audit:** Systematic removal of low-alpha edge fringing ($1 \le \alpha \le 25$) to eliminate gray bounding-box outlines on character cutouts and foliage.
* **Standardized Atmospheric Pipeline:** Transparent overlays (clouds, smoke, mist, fog, and heat haze) upscaled with proportional Gaussian blur strictly on the alpha channel to preserve soft gradients without pixel stair-stepping.
* **Scene Corrections:** Resolved Mid-Ocean Rhaknam cutscene fog washout bug, purged 7 solid-opaque hash-colliding textures in Temple of Pyrynn Area 2, repaired Galcian eye/cape alpha masks, and standardized the Delphinus Bridge flag shadow.
* **Runtime GPU Textures:** Dynamic Format 8 (C4, 4-bit paletted) textures generated during endgame bosses, ship battles, and Intro Movie A extracted and remastered with dual `_arb.dds` compatibility aliases.
* **BC7 DDS Format:** Full hardware mipmaps with GPU prefetching for zero-stutter Dolphin playback.

---

## Modular Packages

Download packages from [GitHub Releases](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.3.0):
1. **01. Characters & Enemies** (1.17 GB) — Party members, costumes, weapons, Admirals, NPCs, enemies, Gigas, bosses.
2. **02a. Towns & Ports (Part 1)** (1.26 GB) — Pirate Isle, Sailor's Island, Lower City Valua, Maramba, Horteka, Nasrad.
3. **02b. Towns & Ports (Part 2)** (1.30 GB) — Crescent Isle HQ, Esperanza, Yafutoma, Tenkou Island, Great Silver Shrine.
4. **03a. Dungeons & Ruins (Part 1)** (1.12 GB) — Alfonso's Ship, Shrine Island, Catacombs, Upper City, Pyrynn, Moonstone Mountain, Rixis, Daccat's Island.
5. **03b. Dungeons & Ruins (Part 2)** (1.40 GB) — Grand Fortress, Mt. Kazai, The Dark Rift, Glacia, Tartas, Dangral Island, Vortex, Hydra, Soltis.
6. **04. Ships & Ship Battles** (597.3 MB) — Delphinus, Little Jack, Albatross, Armada vessels, bridge interiors, combat stages.
7. **05. Overworld** (141.9 MB) — Skyboxes, cloud layers, landmasses, floating islands, discoveries, rifts.
8. **06. Battle Arenas & Effects** (940.7 MB) — Combat stages, magic spells (all 6 Moon elements), S-Crafts, weapon trails, particles.
9. **07. UI, Menus & Fonts** (40.6 MB) — Dialogue fonts, compass, HUD command wheels, party status screens, crew cards.
10. **08. Cutscenes & Ending** (811.1 MB) — Intro Movies A & B, story flashback artwork, mid-ocean events, endgame, epilogue.

---

## How to Install on Dolphin Emulator

1. **Download Packages:** Download your desired `.7z` packages from [GitHub Releases](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.3.0).
2. **Extract to Dolphin Textures Folder:** Extract with [7-Zip](https://www.7-zip.org/) directly into Dolphin's texture directory (`GEA` folder):
   * **Windows:** `Documents\Dolphin Emulator\Load\Textures\`
   * **macOS:** `~/Library/Application Support/Dolphin/Load/Textures/`
   * **Linux:** `~/.local/share/dolphin-emu/Load/Textures/`
   * *The final path will be `.../Load/Textures/GEA`.*
3. **Enable Custom Textures in Dolphin:**
   * Open Dolphin &rarr; **Graphics** &rarr; **Advanced** tab.
   * Check **Load Custom Textures**.
   * Check **Prefetch Custom Textures** (loads DDS textures directly into GPU VRAM for stutter-free play).
4. **Recommended Backend:** Set backend to **Vulkan** or **Direct3D 12** (`Graphics` &rarr; `General`).

---

## Project Roadmap

* **Completed:**
  * **v0.1.0:** Initial texture conversion to BC7 DDS and Dolphin `GEA` folder alignment.
  * **v0.2.0:** Weapon restorations, Fina color calibrations, Dolphin mipmap fixes, and environment packages under 2 GB.
  * **v0.3.0 (100% ISO Remaster):** Complete 4x coverage across all 31,010 textures extracted directly from GameCube ISO internal archives. Standardized atmospheric alpha pipeline, scene corrections, and dynamic GPU runtime textures.
* **In Progress / Planned:**
  * **v0.3.1 (Patches & Fixes):** Targeted visual corrections and community patch updates for individual modular 7z packages.
  * **QA Playthrough:** Full playthrough QA across all 84 ship battles and side-quest discoveries.

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
* **Special Effects:** 4x upscale with Gaussian blur filtering on alpha channels.

---

## Credits

* **Bighead & frozenwings:** Original texture pack creators.
* **Shoopkid:** Texture calibration, ISO extraction, curation, AI upscaling, and package maintenance.
* **SEGA / Overworks:** Original creators of Skies of Arcadia.

---

## License
*Fan preservation project. Original game assets belong to SEGA.*
