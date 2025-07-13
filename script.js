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



document.getElementById("sec4").addEventListener("click", function () {
  const offset = window.innerHeight * 0.05; // 5svh

  scroll.scrollTo(document.querySelector(".section-4"), {
    offset: offset,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  });
});



function showContent(id) {
  document.querySelectorAll('.content-box').forEach(box => box.classList.add('hidden'));
  const content = document.getElementById(`content-${id}`);
  if (content) content.classList.remove('hidden');
}


