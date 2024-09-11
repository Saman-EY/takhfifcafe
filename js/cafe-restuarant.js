const dropdownButtons = document.querySelectorAll(".dropdownButton");

function toggleDropdown(button) {
  const dropdownMenu = button.querySelector(".ListFilterDropDown");
  const arrowIcon = button.querySelector(".OptionGIcon");

  // Close all other dropdowns
  dropdownButtons.forEach((btn) => {
    const menu = btn.querySelector(".ListFilterDropDown");
    const icon = btn.querySelector(".OptionGIcon");

    if (menu !== dropdownMenu) {
      menu.style.display = "none";
      icon.classList.remove("active");
    }
  });




  // Toggle the current dropdown
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
    arrowIcon.classList.remove("active"); // Remove active class from the arrow
  } else {
    dropdownMenu.style.display = "flex";
    arrowIcon.classList.add("active"); // Add active class to the arrow
  }
}

dropdownButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown(button);
  });

  const checkboxes = button.querySelectorAll(".filterCheckbox");
  const badge = button.querySelector(".OptionGBadge");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const checkedCount = button.querySelectorAll(
        ".filterCheckbox:checked"
      ).length;
      badge.textContent = checkedCount;

      badge.style.display = checkedCount > 0 ? "inline-block" : "none";

      const checkImg = checkbox.parentElement.querySelector(".checkImg");
      const uncheckImg = checkbox.parentElement.querySelector(".uncheckImg");
      const span = checkbox.parentElement.querySelector(".CheckboxSpan");

      if (checkbox.checked) {
        checkImg.style.display = "inline";
        uncheckImg.style.display = "none";
        span.classList.add("active");
      } else {
        checkImg.style.display = "none";
        uncheckImg.style.display = "inline";
        span.classList.remove("active");
      }
    });
  });
});

// Close dropdown menus when clicking outside
document.addEventListener("click", (e) => {
  dropdownButtons.forEach((button) => {
    const dropdownMenu = button.querySelector(".ListFilterDropDown");
    if (!button.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});

/////////////////// LIST FILTER END
