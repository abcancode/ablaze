const slides = document.querySelectorAll(".video-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelector(".video-slider");

let current = 0;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${current * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

// Toggle dropdown answers
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Tab active state
const tabs = document.querySelectorAll(".faq-tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
