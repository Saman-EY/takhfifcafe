const swiper = new Swiper(".swiper", {
    speed: 500,
    spaceBetween: 40,
    slidesPerView: 3,
  
    pagination: {
      el: ".swiper-pagination",
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
  