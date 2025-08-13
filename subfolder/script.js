//SCROLL
let scroll;

scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

function setupDropdown(triggerSelector, menuSelector) {
  const section = document.querySelector(triggerSelector);
  const menu = section.querySelector(menuSelector);
  let isLockedOpen = false;

  function showMenu() {
    if (!isLockedOpen) {
      menu.classList.add("active");
    }
  }

  function hideMenu() {
    if (!isLockedOpen) {
      menu.classList.remove("active");
    }
  }

  // Hover to show/hide with animation
  section.addEventListener("mouseenter", showMenu);
  section.addEventListener("mouseleave", hideMenu);

  // Click to toggle lock state
  section.addEventListener("click", (e) => {
    e.stopPropagation();
    isLockedOpen = !isLockedOpen;
    if (isLockedOpen) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });

  // Click outside to unlock & close
  document.addEventListener("click", () => {
    if (isLockedOpen) {
      isLockedOpen = false;
      menu.classList.remove("active");
    }
  });
}

setupDropdown('.xplo', '.dropdown-menu');
setupDropdown('.lang', '.lang-menu');




    document.addEventListener("DOMContentLoaded", function () {
      const ids = ["about", "xplo", "lang"];
      ids.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          el.style.animation = `con2show 0.8s ease-out ${index * 0.2}s forwards`;
        }
      });
    });




  