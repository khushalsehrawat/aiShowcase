const imageBase = "images/";

const galleryItems = [
  { file: "Gemini_Generated_Image_wr8uiwr8uiwr8uiw.png", title: "Outdoor AI Portrait", type: "model" },
  { file: "10.png", title: "Luxury Pour Product Shot", type: "product" },
  { file: "ChatGPT Image Jun 4, 2026, 05_11_57 PM.png", title: "Cinematic Rain Portrait", type: "scene" },
  { file: "ChatGPT Image Jun 4, 2026, 03_08_59 PM.png", title: "Editorial Character Visual", type: "fashion" },
  { file: "11.png", title: "Premium Bottle Campaign", type: "product" },
  { file: "ChatGPT Image Jun 4, 2026, 05_11_59 PM.png", title: "Lifestyle Scene Build", type: "model" },
  { file: "Gemini_Generated_Image_kbj2bjkbj2bjkbj2.png", title: "Fashion Model Concept", type: "fashion" },
  { file: "14.png", title: "Celebration Product Visual", type: "product" },
  { file: "ChatGPT Image Jun 4, 2026, 03_37_49 PM.png", title: "Square Brand Image", type: "scene" },
  { file: "ChatGPT Image Jun 4, 2026, 05_12_03 PM.png", title: "Commercial Portrait", type: "model" },
  { file: "7.png", title: "Premium Lifestyle Product", type: "product" },
  { file: "ChatGPT Image Jun 4, 2026, 03_38_18 PM.png", title: "Fashion Campaign Frame", type: "fashion" },
  { file: "Gemini_Generated_Image_ (1).png", title: "Brand Scene", type: "scene" },
  { file: "8.png", title: "Bottle Hero Visual", type: "product" },
  { file: "ChatGPT Image Jun 4, 2026, 03_38_44 PM.png", title: "Editorial Model Look", type: "fashion" },
  { file: "ChatGPT Image Jun 4, 2026, 05_12_10 PM.png", title: "Creator Style Portrait", type: "model" },
  { file: "Gemini_Generated_Image_ (2).png", title: "AI Model Styling", type: "model" },
  { file: "9.png", title: "Elegant Product Scene", type: "product" },
  { file: "ChatGPT Image Jun 4, 2026, 03_39_39 PM.png", title: "Fashion Visual Direction", type: "fashion" },
  { file: "ChatGPT Image Jun 4, 2026, 05_12_15 PM.png", title: "Campaign Portrait", type: "model" },
  { file: "Gemini_Generated_Image_.png", title: "Landscape Brand Concept", type: "scene" },
  { file: "ChatGPT Image Jun 4, 2026, 03_11_25 PM.png", title: "Vertical AI Character", type: "fashion" },
  { file: "ChatGPT Image Jun 4, 2026, 05_12_22 PM.png", title: "AI Model Portfolio", type: "model" },
  { file: "aurafit-virtual-tryon.jpg", title: "Virtual Try-On Mockup", type: "fashion" }
];

const videos = [
  { file: "Create_a_second_ultra_re.mp4", title: "Ultra Real Scene", text: "Cinematic clip generated for high-impact presentation moments." },
  { file: "keep_focusing_on_cat_only_and (1).mp4", title: "Focused Subject Clip", text: "Prompt-controlled subject focus and movement test." },
  { file: "Model_showcases_her_dress_202606041729 (1).mp4", title: "Dress Showcase Cut", text: "Alternate AI fashion reel with model-led styling and movement." },
  { file: "Model_showcases_her_dress_202606041729.mp4", title: "Dress Showcase", text: "Short creator-style fashion reel for social campaigns." },
  { file: "Modify_that_prompt_into_real_a.mp4", title: "Realistic Motion Test", text: "Generated movement refined into a more natural ad-ready look." },
  { file: "Untitled video (1).mp4", title: "Cinematic Reel 01", text: "AI-generated motion scene prepared for ad and concept presentation." },
  { file: "Untitled video (2).mp4", title: "Cinematic Reel 02", text: "Premium AI video clip with product and model campaign potential." },
  { file: "Untitled video (3).mp4", title: "Cinematic Reel 03", text: "Longer motion experiment for dramatic brand storytelling." },
  { file: "Woman_touching_chest_fabric_202606041557.mp4", title: "Fabric Detail Motion", text: "Fashion-focused movement for clothing and material storytelling." }
];

const galleryGrid = document.querySelector("#galleryGrid");
const videoReel = document.querySelector("#videoReel");
let lightbox;

function renderGallery(filter = "all") {
  const items = filter === "all" ? galleryItems : galleryItems.filter((item) => item.type === filter);

  galleryGrid.innerHTML = items.map((item) => {
    const path = `${imageBase}${item.file}`;
    return `
      <a class="gallery-item glightbox" href="${path}" data-gallery="ai-work" data-title="${item.title}">
        <img src="${path}" alt="${item.title}" loading="lazy">
        <span class="gallery-caption">
          <strong>${item.title}</strong>
          <span>${item.type.charAt(0).toUpperCase() + item.type.slice(1)} AI content</span>
        </span>
      </a>
    `;
  }).join("");

  if (lightbox) {
    lightbox.destroy();
  }
  if (window.GLightbox) {
    lightbox = GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
  }
  if (window.AOS) {
    AOS.refresh();
  }
}

function renderVideos() {
  videoReel.innerHTML = videos.map((item) => {
    const path = `${imageBase}${item.file}`;
    return `
      <div class="swiper-slide">
        <article class="video-card">
          <video src="${path}" muted loop playsinline preload="metadata" controls></video>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({ duration: 650, once: true, offset: 80 });
  }
  renderGallery();
  renderVideos();
  initLuxuryExperience();

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderGallery(button.dataset.filter);
    });
  });

  if (window.Swiper) {
    new Swiper(".reel-swiper", {
      slidesPerView: 1.1,
      spaceBetween: 20,
      centeredSlides: false,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        576: { slidesPerView: 1.35 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  document.querySelector("#projectForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim() || "New client";
    const projectType = document.querySelector("#projectType").value;
    const brief = document.querySelector("#brief").value.trim() || "I want premium AI content for my brand.";
    const text = `AI Content Project Brief\nName: ${name}\nProject type: ${projectType}\nBrief: ${brief}`;
    const note = document.querySelector("#formNote");

    try {
      await navigator.clipboard.writeText(text);
      note.textContent = "Brief copied. Send it to start the project.";
    } catch {
      note.textContent = "Brief ready. Select and copy your message from the form.";
    }
  });
});

function initLuxuryExperience() {
  initCursor();
  initGsapMotion();
  initCanvasAtmosphere();
}

function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring || window.matchMedia("(max-width: 991px)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.querySelectorAll("a, button, input, textarea, select, video, .gallery-item").forEach((item) => {
    item.addEventListener("mouseenter", () => ring.classList.add("is-active"));
    item.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
  });
}

function initGsapMotion() {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const nav = document.querySelector(".glass-nav");
  ScrollTrigger.create({
    start: "top -70",
    end: 99999,
    toggleClass: { className: "nav-scrolled", targets: nav }
  });

  gsap.from(".reveal-line", {
    y: 32,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out"
  });

  gsap.from(".reveal-title", {
    y: 42,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.1,
    delay: 0.08,
    ease: "power3.out"
  });

  gsap.from(".reveal-panel div", {
    y: 22,
    opacity: 0,
    duration: 0.75,
    stagger: 0.08,
    delay: 0.45,
    ease: "power3.out"
  });

  gsap.to(".hero-bg", {
    scale: 1.08,
    yPercent: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      y: 28,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 82%"
      }
    });
  });

  gsap.to(".stacked-frames img:nth-child(1)", {
    y: -42,
    rotate: -12,
    ease: "none",
    scrollTrigger: { trigger: ".showcase-ribbon", start: "top bottom", end: "bottom top", scrub: true }
  });

  gsap.to(".stacked-frames img:nth-child(2)", {
    y: 36,
    scale: 1.04,
    ease: "none",
    scrollTrigger: { trigger: ".showcase-ribbon", start: "top bottom", end: "bottom top", scrub: true }
  });

  gsap.to(".stacked-frames img:nth-child(3)", {
    y: -28,
    rotate: 12,
    ease: "none",
    scrollTrigger: { trigger: ".showcase-ribbon", start: "top bottom", end: "bottom top", scrub: true }
  });

  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.18, y: y * 0.28, duration: 0.22, ease: "power2.out" });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.35, ease: "elastic.out(1, 0.45)" });
    });
  });
}

function initCanvasAtmosphere() {
  const canvas = document.querySelector("#luxuryCanvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const particles = [];
  const particleCount = window.innerWidth < 768 ? 0 : 28;
  let width;
  let height;
  let deviceRatio;

  function resize() {
    deviceRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * deviceRatio;
    canvas.height = height * deviceRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.28,
      speedY: Math.random() * -0.22 - 0.05,
      alpha: Math.random() * 0.42 + 0.12
    };
  }

  function resetParticles() {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(createParticle());
    }
  }

  function draw() {
    if (particleCount === 0) return;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.y < -10 || particle.x < -10 || particle.x > width + 10) {
        Object.assign(particle, createParticle(), { y: height + 10 });
      }

      const gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 8);
      gradient.addColorStop(0, `rgba(234, 210, 162, ${particle.alpha})`);
      gradient.addColorStop(1, "rgba(234, 210, 162, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * 8, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  resetParticles();
  draw();
  window.addEventListener("resize", () => {
    resize();
    resetParticles();
  });
}
