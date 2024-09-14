const swiper = new Swiper(".swiper", {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 2, // Show 1 slide per view
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3, // Show 1 slide per view
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const customPrevBtn = document.getElementById("homeslidernext");
const customNextBtn = document.getElementById("homesliderprev");

// Add event listeners to custom buttons
customPrevBtn.addEventListener("click", function () {
  swiper.slidePrev(); // Go to the previous slide
});

customNextBtn.addEventListener("click", function () {
  swiper.slideNext(); // Go to the next slide
});

// Tabs

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the 'active' class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add the 'active' class to the clicked tab
    tab.classList.add("active");

    // Hide all content sections
    contents.forEach((content) => content.classList.remove("show"));

    // Show the content section corresponding to the clicked tab
    const targetContent = document.querySelector(
      `[data-content="${tab.getAttribute("data-tab")}"]`
    );
    targetContent.classList.add("show");
  });
});

// Tabs end
