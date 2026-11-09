# Skies of Arcadia Legends HD Texture Pack

A 99% complete high-definition texture replacement pack for **Skies of Arcadia Legends** (GameCube) on Dolphin Emulator.

Originally created by **Bighead** and **frozenwings**, continued, expanded, and curated by **Shoopkid**.

---

## Download: v0.3.0 (November 2026)

* **Primary Download:** **[GitHub Releases (v0.3.0)](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.3.0)**
* **Google Drive Mirror:** **[Google Drive Folder Mirror](https://drive.google.com/drive/folders/1BuXhFw8TEIgEIbI5aqrz8OaobzVJvLtf?usp=sharing)**

### Highlights in v0.3.0
* **99% Game Coverage (31,010 Textures):** Massive 4x overhaul covering party members, enemies, bosses, airships, towns, dungeons, overworld terrain, and combat stages.
* **BC7 DDS Format & Zero Stutter:** Full hardware mipmaps with Dolphin GPU prefetching for smooth, zero-stutter playback.
* **Alpha Channel & Ghost Haze Audit:** Systematic removal of low-alpha edge fringing ($1 \le \alpha \le 25$) to eliminate gray bounding-box outlines on character cutouts and foliage.
* **Atmospheric Smoothing Pipeline:** Proportional Gaussian blur applied strictly to alpha channels for transparent particles and haze (smoke, clouds, mist, fog).
* **Runtime GPU Aliases:** Dual `_arb.dds` compatibility naming for dynamic runtime paletted textures.

---

## Modular Packages

Download packages from [GitHub Releases](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.3.0):
1. **01. Characters & Enemies** (1.17 GB • 5,359 textures)
2. **02a. Towns & Ports (Part 1)** (1.26 GB • 2,440 textures)
3. **02b. Towns & Ports (Part 2)** (1.30 GB • 2,299 textures)
4. **03a. Dungeons & Ruins (Part 1)** (1.12 GB • 2,204 textures)
5. **03b. Dungeons & Ruins (Part 2)** (1.40 GB • 3,090 textures)
6. **04. Ships & Ship Battles** (597.3 MB • 2,432 textures)
7. **05. Overworld** (141.9 MB • 878 textures)
8. **06. Battle Arenas & Effects** (940.7 MB • 7,537 textures)
9. **07. UI, Menus & Fonts** (40.6 MB • 322 textures)
10. **08. Cutscenes & Ending** (811.1 MB • 4,449 textures)

---

## Raw Texture Dumps & Modding Archives

For modders, digital archivists, and technical creators, we also provide the raw unscaled 1x GameCube asset extractions directly from the original disc:

* **[Raw ISO Texture Dump](https://drive.google.com/file/d/1UoPstVykU6wGnGgPEeRN8pm7l0zxMQa1/view?usp=sharing)** (850 MB .7z | 107,757 files, 2,558 folders | 1.55 GB uncompressed, 1.74 GB on disk)
  * *What it is:* Every single PNG texture dumped directly from the Skies of Arcadia Legends GameCube ISO disc for every 3D model, character, NPC, enemy, and map asset using model extraction tools.
  * *Use case:* Provides the complete, unfiltered baseline reference of the original GameCube game files for asset research, model hierarchy inspection, and custom texture overhauls.

* **[PNG 1x Dump (No Duplicates)](https://drive.google.com/file/d/1u0_dIfL0xAad-OKtmU2ebxpCek6R08LK/view?usp=sharing)** (587 MB .7z | 30,571 files, 1,987 folders | 595 MB uncompressed, 648 MB on disk)
  * *What it is:* The deduplicated canonical master set of 1x native resolution textures. Strips all redundant duplicate textures across models (such as eye blinks, terrain stones, sky gradients, and shared UI assets).
  * *Use case:* Eliminates thousands of hours of redundant upscaling work. Allows upscaling each distinct asset once without processing duplicate hashes across different ISO subdirectories.

* **[Model Directory Index (CSV Map)](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/download/v0.3.0/Model_Directory_Map.csv)** (135 KB .csv | 1,703 mapped folders)
  * *What it is:* A complete index mapping all streamlined model ID folders (`GEA/01/...`, `GEA/02/002/...`) to their human-readable descriptions and texture counts.
  * *Use case:* Essential reference for game recompiler developers, modders, and anyone navigating the minimal folder tree.

---

## How to Install on Dolphin Emulator

1. **Download Packages:** Download your desired `.7z` packages from [GitHub Releases](https://github.com/shoopkid/Skies-of-Arcadia-Legends-HD-Textures-Pack/releases/tag/v0.3.0).
2. **Extract to Dolphin Textures Folder:** Extract with [7-Zip](https://www.7-zip.org/) directly into Dolphin's texture directory (`GEA` folder):
   * **Windows:** `Documents\Dolphin Emulator\Load\Textures\`
   * **Steam Deck (SteamOS):** `~/.var/app/org.DolphinEmu.dolphin-emu/data/dolphin-emu/Load/Textures/` (Flatpak) or `/home/deck/Emulation/storage/dolphin/Load/Textures/` (EmuDeck)
   * **Linux (Desktop):** `~/.local/share/dolphin-emu/Load/Textures/` (Native) or `~/.var/app/org.DolphinEmu.dolphin-emu/data/dolphin-emu/Load/Textures/` (Flatpak)
   * **macOS:** `~/Library/Application Support/Dolphin/Load/Textures/`
   * *The final path will be `.../Load/Textures/GEA`.*
3. **Enable Custom Textures in Dolphin:**
   * Open Dolphin &rarr; **Graphics** &rarr; **Advanced** tab.
   * Check **Load Custom Textures**.
   * Check **Prefetch Custom Textures** (loads DDS textures directly into GPU VRAM for stutter-free play).
4. **Recommended Backend:** Set backend to **Vulkan** or **Direct3D 12** (`Graphics` &rarr; `General`).
5. **Recommended Dolphin Enhancements Settings (`Graphics` &rarr; `Enhancements`):**
   * **Internal Resolution:** `4x Native (2560x2112) for 1440p` (or 3x for 1080p, 5x–6x for 4K)
   * **Anti-Aliasing:** `2x MSAA` (or higher)
   * **Texture Filtering:** `Force Linear and 16x Anisotropic`
   * **Scaled EFB Copy:** Checked
   * **Widescreen Hack:** Checked (for 16:9 displays)
   * **Disable Fog:** Unchecked (*fog must remain enabled* for authentic skybox depth and atmosphere)
   * **Disable Copy Filter:** Checked
   * **Force 24-Bit Color:** Checked
   * **Arbitrary Mipmap Detection:** Checked (*crucial* for custom hardware mipmaps)

---

## Project Roadmap

* **Completed:**
  * **v0.1.0:** Initial texture conversion to BC7 DDS format and Dolphin `GEA` folder alignment.
  * **v0.2.0:** Weapon restorations, Fina color calibrations, Dolphin mipmap fixes, and environment packages under 2 GB.
  * **v0.3.0 (99% Complete HD Texture Mod):** 31,010 textures across 10 modular packages in BC7 DDS with hardware mipmaps. Full alpha channel audit, ghost haze elimination, standardized 10px Gaussian blur on transparency overlays, and dynamic GPU runtime texture aliases.
* **In Progress & Planned:**
  * **v0.3.1 (Playthrough QA & Patches):** Currently playing through the game to identify scenes and assets that require fixing, keeping a sharp eye out for any noticeable issues. Any corrections will be packaged into modular updates.
  * **v0.4.0 (Full Game Capture):** Capture all remaining assets upscaled without issue, including remaining UI assets and tracked-down environment effects.
  * **v1.0.0 (The Definitive Goal):** Complete milestone achievable when all game assets across the entire game are upscaled and verified without issue.

---

## Comparison Gallery

View before-and-after sliders:
**[Comparison Gallery](https://skiesofarcadiahd.xyz/)**

---

## Process
*Upscaling methods*

* **Characters — Faces, Clothing and Weapons:** Faces were upscaled with Topaz Gigapixel Redefine tool at 2x and low creativity settings to generate higher resolution textures. Face textures were then upscaled in Topaz Gigapixel with the High Fidelity model at 2x, minimal sharpen, high denoise, and high compression fix. This results in a smooth upscaled version close to the original artistic direction of the base assets. Any assets that require airbrushing and tweaking are processed in Photoshop in post. This is an ongoing project. Characters body and clothing textures are largely upscaled with Topaz Gigapixel High fidelity model at 4x.
* **Environment:** Rock and stone textures upscaled with Topaz Gigapixel Recover generative model. Natural foliage is upscaled with high fidelity model in Topaz Gigapixel.
* **UI and Fonts:** UI and Fonts were largely carried over from the original Bighead and frozenwings project. Assets that were left unfinished have been worked on by Shoopkid (ie. Cupil Cham alert, Moonfish target, Delphinus compass, Battle UI Captain Command Icon.) Mostly redrawn entirely from scratch in Photoshop and Procreate when required. Original base textures are brought into either Photoshop or Procreate, upscaled 4x and then redrawn or recomposed using that as a foundation.
* **Effects — Shadows, Fires, Glowing Assets:** Special effect textures (clouds, smoke, fire, shadows, lighting) are upscaled 4x with Gaussian blur applied strictly to the alpha channel to eliminate harsh pixelation without gradient loss. These are the hardest to upscale as the way the Gamecube engine can read transparency textures is hit or miss. Photoshop upscaled 4x then applying a gaussian blur of 10px radius is most effective at achieving a successful upscale.

---

## Credits

* **Bighead & frozenwings:** Original texture pack creators.
* **Shoopkid:** Texture calibration, curation, AI upscaling, and package maintenance.
* **SEGA / Overworks:** Original creators of Skies of Arcadia.

---

*A fan preservation hobby project curated by Shoopkid to achieve a long desire for a Skies of Arcadia HD remaster. Not affiliated with SEGA or Overworks. All original game assets, lore, characters, and trademarks belong to SEGA / Overworks.*
