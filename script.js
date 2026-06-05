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
  { file: "Model_holding_snack_pack_202606041554.mp4", title: "Product Model Reel", text: "AI talent holding a snack pack for a commercial-style clip." },
  { file: "Woman_touching_chest_fabric_202606041557.mp4", title: "Fabric Detail Motion", text: "Fashion-focused movement for clothing and material storytelling." },
  { file: "Model_showcases_her_dress_202606041729.mp4", title: "Dress Showcase", text: "Short creator-style fashion reel for social campaigns." },
  { file: "Untitled video (1).mp4", title: "Ultra Real Scene", text: "Cinematic clip generated for high-impact presentation moments." },
  { file: "keep_focusing_on_cat_only_and (1).mp4", title: "Focused Subject Clip", text: "Prompt-controlled subject focus and movement test." },
  { file: "Modify_that_prompt_into_real_a.mp4", title: "Realistic Motion Test", text: "Generated movement refined into a more natural ad-ready look." }
];

const galleryGrid = document.querySelector("#galleryGrid");
const videoReel = document.querySelector("#videoReel");

function renderGallery(filter = "all") {
  const items = filter === "all" ? galleryItems : galleryItems.filter((item) => item.type === filter);

  galleryGrid.innerHTML = items.map((item, index) => {
    const path = `${imageBase}${item.file}`;
    return `
      <a class="gallery-item glightbox" href="${path}" data-gallery="ai-work" data-title="${item.title}" data-aos="fade-up" data-aos-delay="${Math.min(index % 6, 5) * 40}">
        <img src="${path}" alt="${item.title}" loading="lazy">
        <span class="gallery-caption">
          <strong>${item.title}</strong>
          <span>${item.type.charAt(0).toUpperCase() + item.type.slice(1)} AI content</span>
        </span>
      </a>
    `;
  }).join("");

  GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
  AOS.refreshHard();
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
  AOS.init({ duration: 700, once: true, offset: 80 });
  renderGallery();
  renderVideos();

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderGallery(button.dataset.filter);
    });
  });

  new Swiper(".reel-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 18,
    centeredSlides: false,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
      576: { slidesPerView: 2.1 },
      992: { slidesPerView: 3.2 },
      1200: { slidesPerView: 4 }
    }
  });

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
