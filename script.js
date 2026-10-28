document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Mobile Navigation Logic ---
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const navBackdrop = document.getElementById("navBackdrop");
  const navLinks = mobileNav.querySelectorAll("a");

  function openNav() {
    mobileNav.classList.add("is-open");
    navBackdrop.classList.add("is-active");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  function closeNav() {
    mobileNav.classList.remove("is-open");
    navBackdrop.classList.remove("is-active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function toggleNav() {
    const isOpen = mobileNav.classList.contains("is-open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  // Event Listeners for Nav
  mobileMenuBtn.addEventListener("click", toggleNav);
  navBackdrop.addEventListener("click", closeNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
      closeNav();
      mobileMenuBtn.focus();
    }
  });

  // --- 2. Generate Gallery Content ---
  const comparisons = [
    { title: "Vyse", id: "001" },
    { title: "Sailor's Island", id: "002" },
    { title: "Ship Battle UI", id: "003" },
    { title: "Characters and Environment", id: "004" },
    { title: "Cham Alert Spritesheet", id: "005" },
    { title: "Overworld", id: "006" },
    { title: "Ixa'Ness Demons", id: "007" },
    { title: "Alfonso", id: "008" },
    { title: "Battle UI", id: "009" },
  ];

  const galleryContainer = document.getElementById("gallery-container");

  if (galleryContainer) {
    comparisons.forEach((comp) => {
      const html = `
        <div class="comparison-section">
          <h3>${comp.title}</h3>
          <div class="comparison-slider">
            <img src="images/${comp.id}-before.jpg" alt="Original Gamecube rendering of ${comp.title}" loading="lazy" />
            <div class="badge badge-before">Original</div>
            <img class="img-after" src="images/${comp.id}-after.jpg" alt="HD 4x Upscaled rendering of ${comp.title}" loading="lazy" />
            <div class="badge badge-after">HD Texture</div>
            <div class="slider-bar"></div>
          </div>
        </div>
      `;
      galleryContainer.insertAdjacentHTML("beforeend", html);
    });
  }

  // --- 3. Initialize the Before/After Sliders ---
  const initSliders = () => {
    const sliders = document.querySelectorAll(".comparison-slider");
    const moveSlider = (e, container) => {
      const rect = container.getBoundingClientRect();
      const xPos = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const x = xPos - rect.left;
      let percent = (x / rect.width) * 100;
      percent = Math.max(0, Math.min(percent, 100));
      container.style.setProperty("--local-pos", `${percent}%`);
    };

    sliders.forEach((slider) => {
      slider.addEventListener("mousemove", (e) => moveSlider(e, slider));
      // Add touch support, passive true for scroll performance
      slider.addEventListener(
        "touchmove",
        (e) => {
          moveSlider(e, slider);
        },
        { passive: true },
      );
    });
  };

  initSliders();

  // --- 4. Back to Top Button Logic ---
  const bttButton = document.getElementById("backToTop");

  window.addEventListener(
    "scroll",
    () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        bttButton.classList.add("is-visible");
      } else {
        bttButton.classList.remove("is-visible");
      }
    },
    { passive: true },
  );

  bttButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
// --- 4. YouTube Embed Local File Fallback (Resolves YouTube Error 153 on file://) ---
  if (window.location.protocol === "file:") {
    const videoContainer = document.getElementById("videoContainer");
    if (videoContainer) {
      videoContainer.innerHTML = `
        <div class="video-local-fallback">
          <img src="https://img.youtube.com/vi/PrEvpRJ37PM/maxresdefault.jpg" alt="Video preview thumbnail" class="fallback-thumb" />
          <div class="fallback-overlay">
            <a href="https://youtu.be/PrEvpRJ37PM" target="_blank" rel="noopener noreferrer" class="play-btn-circle" aria-label="Watch Intro on YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </a>
            <p class="fallback-note">
              <strong>Local File Notice:</strong> YouTube blocks embedded players when loaded directly from <code>file://</code> paths (Error 153).<br />
              <a href="https://youtu.be/PrEvpRJ37PM" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: underline; font-weight: 600;">Click here to watch on YouTube</a> or launch via a local web server (<code>python -m http.server</code>).<br />
              <span style="font-size: 0.85rem; color: #94a3b8;">(The embedded player functions automatically once hosted on your live domain).</span>
            </p>
          </div>
        </div>
      `;
    }
  }
});
