// LOCOMOTIVE
let scroll;
// Wait for full load
window.addEventListener('load', () => {
  // Confirm LocomotiveScroll exists
  if (typeof LocomotiveScroll === 'undefined') {
    console.error('LocomotiveScroll is not loaded!');
    return;
  }

  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
});

// DROPDOWN MENU
function setupDropdown(triggerSelector, menuSelector) {
    const section = document.querySelector(triggerSelector);
    const menu = section.querySelector(menuSelector);
    let isLockedOpen = false;

    section.addEventListener('mouseenter', () => {
      if (!isLockedOpen) menu.style.display = 'block';
    });

    section.addEventListener('mouseleave', () => {
      if (!isLockedOpen) menu.style.display = 'none';
    });

    section.addEventListener('click', (e) => {
      e.stopPropagation();
      isLockedOpen = !isLockedOpen;
      menu.style.display = isLockedOpen ? 'block' : 'none';
    });

    document.addEventListener('click', () => {
      if (isLockedOpen) {
        menu.style.display = 'none';
        isLockedOpen = false;
      }
    });
  }
setupDropdown('.xplo', '.dropdown-menu');
setupDropdown('.lang', '.lang-menu');





