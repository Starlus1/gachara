// LOCOMOTIVE
let scroll;

scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
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

//MOBILE WARNING
function checkScreenSize() {
  const warning = document.getElementById('mobile-warning');
  const content = document.getElementById('content');

  if (window.innerWidth < 1024) {
    warning.style.display = 'flex';
    content.style.display = 'none';
    document.body.classList.add('no-scroll');
  } else {
    warning.style.display = 'none';
    content.style.display = 'block';
    document.body.classList.remove('no-scroll');
  }
}
window.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);


//ANIMATIONS
  //TITLE
    document.addEventListener("DOMContentLoaded", () => {
      const title = document.getElementById("title");
      if (title) {
        title.style.animation = "titleshow 0.8s ease-out forwards";
        title.style.animationDelay = "0.1s";
      }
    });
  //ICONS
    document.addEventListener("DOMContentLoaded", function () {
      const el = document.getElementById("icons");
      if (el) {
        el.style.animation = "cardshow 1s ease-out forwards";
      }
    });
  //CON2
    document.addEventListener("DOMContentLoaded", function () {
      const ids = ["about", "xplo", "lang"];
      ids.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          el.style.animation = `con2show 0.8s ease-out ${index * 0.2}s forwards`;
        }
      });
    });

  //PURPOSE
    document.addEventListener("DOMContentLoaded", function () {
      const section2 = document.getElementById("section2");
      const purpose = document.getElementById("purpose");
      const introduction = document.getElementById("introduction");

      if (!section2 || !purpose || !introduction) return;

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              purpose.style.animation = "purpose 0.7s ease-in-out forwards";
              introduction.style.animation = "intro 0.8s ease-in-out forwards";
              observer.unobserve(section2);
            }
          });
        },
        {
          threshold: 0.3
        }
      );

      observer.observe(section2);
    });

  //CATALOGUE
    document.addEventListener("DOMContentLoaded", function () {
    const headDef = document.getElementById("head-def");
    const pDef = document.getElementById("p-def");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          headDef.classList.add('reveal');
          pDef.classList.add('reveal-delay');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    observer.observe(headDef);
    });

  //SECTION 5
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const title = document.querySelector('.addict-title');
          const boxes = document.querySelectorAll('.addict-box');
          const line1 = document.querySelector('.addict-line1');
          const line2 = document.querySelector('.addict-line2');

          // Animate title
          title.style.animation = 'addict-floatTitle 1.6s cubic-bezier(0.65, -0.15, 0.2, 1.6) forwards';

          // Animate boxes
          boxes.forEach((box, i) => {
            setTimeout(() => {
              box.classList.add('animated');
            }, i * 300);
          });

          // Animate lines
          line1.classList.add('animated');
          line2.classList.add('animated');

          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    observer.observe(document.querySelector('#section-5'));






