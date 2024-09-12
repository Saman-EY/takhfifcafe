/////////////////////// ACCORDION
const accordionHeaders = document.querySelectorAll(".AccordionHeader");

const firstAccordion = accordionHeaders[0]?.parentElement;
firstAccordion.classList.add("open");
firstAccordion.querySelector(".openAccordion").style.display = "none";
firstAccordion.querySelector(".closeAccordion").style.display = "flex";

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const parentSection = header.parentElement;
    const openBtn = parentSection.querySelector(".openAccordion");
    const closeBtn = parentSection.querySelector(".closeAccordion");

    parentSection.classList.toggle("open");

    if (parentSection.classList.contains("open")) {
      openBtn.style.display = "none";
      closeBtn.style.display = "flex";
    } else {
      openBtn.style.display = "flex";
      closeBtn.style.display = "none";
    }

    // Close other accordions if needed (optional)
    // document.querySelectorAll(".AccordionSec").forEach((section) => {
    //   if (section !== parentSection) {
    //     section.classList.remove("open");
    //     section.querySelector(".openAccordion").style.display = "flex";
    //     section.querySelector(".closeAccordion").style.display = "none";
    //   }
    // });
  });
});
//// //ACCORDION END
