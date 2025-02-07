var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // ✅ Ensures 3 items are visible
    spaceBetween: 20, // Adjusts spacing
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // ✅ Enables infinite scrolling
    breakpoints: {
        1024: { slidesPerView: 3 }, // 3 items on large screens
        768: { slidesPerView: 2 },  // 2 items on tablets
        480: { slidesPerView: 1 }   // 1 item on mobile
    }
});

const containers = document.querySelectorAll(".image-container");
const templateVenus = document.querySelector("#creature-venus");
const templateTentacle = document.querySelector("#creature-tentacle");
const templateLarva = document.querySelector("#creature-larva");

containers.forEach((container) => {
  container.appendChild(templateVenus.cloneNode(true));
  container.appendChild(templateTentacle.cloneNode(true));
  container.appendChild(templateLarva.cloneNode(true));
});

const content = document.querySelector(".content");
const track = document.querySelector(".track");

function updateDuration() {
  const contentWidth = content.offsetWidth;
  // Reduced speed (was 100, now 80 pixels per second)
  const baseSpeed = 50;
  const duration = contentWidth / baseSpeed;

  const minDuration = 8; // Increased minimum duration (was 5)
  const maxDuration = 35; // Increased maximum duration (was 30)
  const finalDuration = Math.min(Math.max(duration, minDuration), maxDuration);

  // Increased the adjustment factor for wider screens
  const adjustmentFactor = window.innerWidth > 1400 ? 0.998 : 0.999;
  track.style.animationDuration = finalDuration * adjustmentFactor + "s";
}

// Update on load, resize, and orientation change
window.addEventListener("load", updateDuration);
window.addEventListener("resize", updateDuration);
window.addEventListener("orientationchange", updateDuration);

// Update periodically to handle any dynam
