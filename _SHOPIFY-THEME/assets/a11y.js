document.addEventListener("DOMContentLoaded", function () {
  var overlayElement = document.querySelector(".slidecarthq-overlay");

  if (overlayElement) {
    overlayElement.setAttribute("aria-label", "Slide cart open");
  } else {
    console.warn("Element with class 'slidecarthq-overlay' not found.");
  }

  const itemContainers = document.querySelectorAll(".item-container");

  itemContainers.forEach(function (container) {
    const titleElement = container.querySelector("h3.title a");
    const productTitle = titleElement
      ? titleElement.textContent.trim()
      : "Product";

    const quantityInput = container.querySelector(".quantity-selector input");

    if (quantityInput) {
      quantityInput.setAttribute("aria-label", `Quantity for ${productTitle}`);
    }
  });

  const sidebarMenu = document.getElementById("sidebar-menu");

  // Function to handle drawer state changes
  const handleDrawerState = (isOpen) => {
    sidebarMenu.setAttribute("aria-hidden", !isOpen);
    if (isOpen) {
      sidebarMenu.removeAttribute("inert");
    } else {
      sidebarMenu.setAttribute("inert", "");
    }
  };

  // Watch for changes to the drawer's classes to detect when it's opened/closed
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const isOpen = sidebarMenu.classList.contains("is-active"); // Adjust this class name based on your drawer implementation
        handleDrawerState(isOpen);
      }
    });
  });

  observer.observe(sidebarMenu, { attributes: true });
});
