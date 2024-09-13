const swiper = new Swiper(".swiper", {
  speed: 500,
  spaceBetween: 40,

  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const customPrevBtn = document.getElementById("mainslidernext");
const customNextBtn = document.getElementById("mainsliderprev");

// Add event listeners to custom buttons
customPrevBtn.addEventListener("click", function () {
  swiper.slidePrev(); // Go to the previous slide
});

customNextBtn.addEventListener("click", function () {
  swiper.slideNext(); // Go to the next slide
});

document.addEventListener("DOMContentLoaded", function () {
  //   // Function to update the total price
  //   function updateTotalPrice() {
  //     let total = 0;

  //     document.querySelectorAll(".content li").forEach((item) => {
  //       const priceElement = item.querySelector(".price-div");
  //       const qtyElement = item.querySelector(".menuItemQty");

  //       const price =
  //         parseInt(priceElement.textContent.trim().replace("T", "")) * 1000;
  //       const qty = parseInt(qtyElement.textContent.trim());

  //       total += price * qty;
  //     });

  //     const totalPriceElement = document.getElementById("TotalPrice");
  //     totalPriceElement.textContent = total.toLocaleString() + " تومان";
  //   }

  // Add click event listeners for plus and minus buttons
  document.querySelectorAll(".plusBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const qtyElement = this.nextElementSibling;
      let qty = parseInt(qtyElement.textContent.trim());
      qty++;
      qtyElement.textContent = qty;
    });
  });

  document.querySelectorAll(".minusBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const qtyElement = this.previousElementSibling;
      let qty = parseInt(qtyElement.textContent.trim());
      if (qty > 0) {
        qty--;
        qtyElement.textContent = qty;
      }
    });
  });
});
