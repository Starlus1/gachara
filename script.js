// LOCOMOTIVE
let scroll;

scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

// == REDIRECT == //
if (window.innerWidth < 1024) {
    window.location.href = "mobile_website.html";
}

// DROPDOWN MENU
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

// Set up both dropdowns
setupDropdown('.xplo', '.dropdown-menu');
setupDropdown('.lang', '.lang-menu');

window.addEventListener('resize', () => {
    location.reload();
  });


//QUICK NAV
document.getElementById("sec2-about").addEventListener("click", function () {
  const offset = window.innerHeight * 0.05; // 5svh

  scroll.scrollTo(document.querySelector(".section-2"), {
    offset: offset,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  });
});
document.getElementById("sec2").addEventListener("click", function () {
  const offset = window.innerHeight * 0.05; // 5svh

  scroll.scrollTo(document.querySelector(".section-2"), {
    offset: offset,
    duration: 800,
    easing: [0.25, 0.0, 0.35, 1.0]
  });
});
document.getElementById("sec3").addEventListener("click", function () {
  const offset = window.innerHeight * 0.05; // 5svh

  scroll.scrollTo(document.querySelector(".section-3"), {
    offset: offset,
    duration: 1000,
    easing: [0.25, 0.0, 0.35, 1.0]
  });
});
document.getElementById("sec4").addEventListener("click", function () {
  const offset = window.innerHeight * 0.05; // 5svh

  scroll.scrollTo(document.querySelector(".section-4"), {
    offset: offset,
    duration: 1200,
    easing: [0.25, 0.0, 0.35, 1.0]
  });
});
document.getElementById("sec5").addEventListener("click", function () {
  const offset = window.innerHeight * -0.1; // 5svh

  scroll.scrollTo(document.querySelector(".section-5"), {
    offset: offset,
    duration: 2000,
    easing: [0.25, 0.0, 0.35, 1.0]
  });
});
document.getElementById("sec6").addEventListener("click", function () {
   const offset = window.innerHeight * 0.05; // 5svh 
scroll.scrollTo(document.querySelector(".section-6"), { 
  offset: offset, 
  duration: 1800, 
  easing: [0.25, 0.0, 0.35, 1.0] }); 
});

//TEXT BOX
function showContent(id) {
  // Remove 'selected' class from all boxes
  document.querySelectorAll('.text-box').forEach(box => {
    box.classList.remove('selected');
  });
  
  // Hide all content boxes
  document.querySelectorAll('.content-box').forEach(box => {
    box.classList.add('hidden');
  });
  
  // Add 'selected' class to the clicked box
  const clickedBox = document.querySelector(`.text-box[onclick="showContent(${id})"]`);
  if (clickedBox) {
    clickedBox.classList.add('selected');
  }
  
  // Show the corresponding content
  const content = document.getElementById(`content-${id}`);
  if (content) {
    content.classList.remove('hidden');
  }
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
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('float-in');
        }, index * 100);
      });
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

  //CATALOGUE & GEMS
    document.addEventListener("DOMContentLoaded", function() {
      const headDef = document.getElementById("head-def");
      const pDef = document.getElementById("p-def");
      const itembig = document.getElementById("itembig");
      const bigGems = document.querySelectorAll('.gem-big');
      const medGems = document.querySelectorAll('.gem-med');
      const smallGems = document.querySelectorAll('.gem-small');

      if (headDef && pDef && itembig) {
        const textObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              headDef.classList.add('reveal');
              pDef.classList.add('reveal-delay');
              itembig.classList.add('gem-reveal-special');
              bigGems.forEach(gem => gem.classList.add('gem-reveal-big'));
              medGems.forEach(gem => gem.classList.add('gem-reveal-med'));
              smallGems.forEach(gem => gem.classList.add('gem-reveal-small'));
              textObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });

        textObserver.observe(headDef);
      }
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

  //SECTION 6
  const section6Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = document.querySelector('.stats-title h1');
        const graphBoxes = document.querySelectorAll('.graph-row > div');

        // Animate title
        title.classList.add('animated');

        // Animate graphs with stagger
        graphBoxes.forEach((box, i) => {
          setTimeout(() => {
            box.classList.add('animated');
          }, i * 300); // 300ms delay between items
        });

        observer.disconnect(); // only run once
      }
    });
  }, { threshold: 0.4 });

  section6Observer.observe(document.querySelector('#section-6'));

  //STATS

//PIE 1
const pie1Data = {
  labels: [
    'Under 1 hour',
    'From 1 to 2 hour',
    'From 3 to 4 hour',
    'Over 4 hour'
  ],
  datasets: [{
    data: [24, 59, 32, 21],
    backgroundColor: [
      '#0ea5e9', // Light Blue
      '#f97316', // Orange
      '#15803d', // Green
      '#1e3a8a'  // Dark Blue
    ],
    borderColor: '#ffffff',
    borderWidth: 1.5
  }]
};
const pie1Options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Time spent for gacha games daily',
      font: {
        size: 14
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.label || '';
          const value = context.parsed;
          const total = context.chart._metasets[0].total;
          const percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${value} (${percentage}%)`;
        }
      }
    }
  }
};
//PIE 2
const pie2Data = {
  labels: ['Yes', 'Sometimes', 'Never'],
  datasets: [{
    data: [65, 13, 59],
    backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
    borderWidth: 1
  }]
};
const pie2Options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Have you drawn Gacha after seeing others do it?',
      font: {
        size: 14
      },
      padding: {
        top: 10,
        bottom: 30
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.label || '';
          const value = context.parsed;
          const total = context.chart._metasets[0].total;
          const percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${value} (${percentage}%)`;
        }
      }
    }
  }
};
//PIE 3
const pie3Data = {
  labels: ['No', '< 100.000₫', '100.000₫ - 500.000₫', '> 500.000₫'],
  datasets: [{
    data: [69, 9, 33, 29],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    borderWidth: 1
  }]
};
const pie3Options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Money spent on gacha games',
      font: {
        size: 14
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.label || '';
          const value = context.parsed;
          const total = context.chart._metasets[0].total;
          const percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${value} (${percentage}%)`;
        }
      }
    }
  }
};

//BAR 1
const bar1Data = {
  labels: [
    ['Think about','gacha games','frequently'],
    ['Anxious if','not playing','gacha games'],
    'No symptoms'
  ],
  datasets: [{
    label: 'Values',
    data: [39, 23, 86],
    backgroundColor: ['skyblue', 'salmon', 'limegreen'],
    borderWidth: 1
  }]
};
const bar1Options = {
  responsive: true,
  maintainAspectRatio: false, // Let the container decide shape (square)
  plugins: {
    title: {
      display: true,
      text: 'Symptoms recorded in students',
      font: {
        size: 14
      }
    },
    legend: {
      display: false
    },
    tooltip: {
      enabled: true
    },
    datalabels: {
      anchor: 'end',
      align: 'start',
      formatter: (value) => value,
      font: {
        weight: 'bold'
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100
    }
  }
};

// Pie Charts
new Chart(document.getElementById('pie1'), { type: 'pie', data: pie1Data, options: pie1Options });
new Chart(document.getElementById('pie2'), { type: 'pie', data: pie2Data, options: pie2Options });
new Chart(document.getElementById('pie3'), { type: 'pie', data: pie3Data, options: pie3Options });

// Bar Charts
new Chart(document.getElementById('bar1'), { type: 'bar', data: bar1Data, options: bar1Options });
//BAR 2
new Chart(document.getElementById('bar2'), {
  type: 'bar',
  data: {
    labels: [
      'Yes - I feel addicted',
      'Probably',
      'No - I don’t feel addicted'
    ],
    datasets: [
      {
        label: 'Yes',
        data: [5, 4, 0],
        backgroundColor: '#1f4e79'
      },
      {
        label: 'Maybe',
        data: [60, 72, 15],
        backgroundColor: '#f97316'
      },
      {
        label: 'No',
        data: [35, 24, 85],
        backgroundColor: '#15803d'
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'How beliefs about gacha design relate to feeling addicted'
        ,font: {
        size: 16
      }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Do you think gacha games are made to be addictive?'
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: value => value + '%'
        }
      }
    }
  }
});

  //FONT
Chart.defaults.font.family = 'Nunito Sans';

const solutions = {
    personal: [
        "Students should build awareness of the impact of gacha games, set daily time limits for gameplay, and manage their personal finances effectively. Replacing gaming habits with healthy activities such as sports, learning new skills, or joining clubs can help reduce dependency. Most importantly, developing intrinsic motivation is key to balancing entertainment and academics."
    ],
    school: [
        "Schools can implement digital literacy programs to help students understand the risks of gacha games and manage their online time better. Extracurricular activities like sports, arts, or study groups should be encouraged to create positive alternatives. Additionally, teachers should collaborate with parents to support students in gradually reducing their gaming time."
    ],
    family: [
        "Families play a central role in guiding and monitoring children's gaming habits. Parents should accompany their children, set reasonable device usage rules, and encourage healthy routines. Participating in outdoor activities or social interactions together can strengthen family bonds and reduce reliance on games."
    ],
    social: [
        "Communities and regulatory bodies should tighten rules around loot box mechanisms and regulate gacha games to reduce addiction risks. Organizing healthy recreational spaces, workshops, and awareness campaigns can help students access accurate information. Society should also build diverse, safe entertainment environments to support young people in making more positive choices."
    ]
};
const textEl = document.getElementById("solution-text");


// Loading Screen JavaScript
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.mainContent = document.getElementById('content');
        this.progressFill = document.getElementById('progress-fill');
        this.loadingText = document.querySelector('.loading-text');
        
        this.totalResources = 0;
        this.loadedResources = 0;
        this.resourceTypes = ['img', 'link[rel="stylesheet"]', 'script[src]'];
        
        this.init();
    }

    init() {
        // Don't start checking until DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.startLoading());
        } else {
            this.startLoading();
        }
    }

    startLoading() {
        this.collectResources();
        
        // If no resources to track, finish immediately
        if (this.totalResources === 0) {
            console.log('No resources to track, finishing immediately');
            this.finishLoading();
            return;
        }
        
        console.log(`Starting to track ${this.totalResources} resources`);
        this.trackResourceLoading();
        
        // Minimum loading time of 500ms for better UX
        this.minLoadTime = new Promise(resolve => setTimeout(resolve, 500));
    }

    collectResources() {
        this.resourceTypes.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (this.shouldTrackElement(element)) {
                    this.totalResources++;
                }
            });
        });
        
        console.log(`Tracking ${this.totalResources} resources`);
    }

    shouldTrackElement(element) {
        if (element.tagName === 'IMG') {
            // Only track images that have src and are not yet loaded
            return element.src && !element.complete;
        } else if (element.tagName === 'LINK') {
            // For stylesheets, check if they're already loaded
            return element.href && element.rel === 'stylesheet' && !element.sheet;
        } else if (element.tagName === 'SCRIPT') {
            // Only track external scripts that aren't loaded yet
            return element.src && !element.readyState;
        }
        return false;
    }

    trackResourceLoading() {
        this.resourceTypes.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (this.shouldTrackElement(element)) {
                    this.attachLoadListener(element);
                }
            });
        });
    }

    attachLoadListener(element) {
        const onLoad = () => {
            console.log('Resource loaded:', element.src || element.href);
            this.onResourceLoaded();
            element.removeEventListener('load', onLoad);
            element.removeEventListener('error', onError);
        };

        const onError = () => {
            console.warn('Resource failed to load:', element.src || element.href);
            this.onResourceLoaded();
            element.removeEventListener('load', onLoad);
            element.removeEventListener('error', onError);
        };

        // Check if already loaded
        if (element.tagName === 'IMG') {
            if (element.complete && element.naturalHeight !== 0) {
                // Image already loaded successfully
                setTimeout(() => this.onResourceLoaded(), 0);
                return;
            }
        } else if (element.tagName === 'LINK' && element.sheet) {
            // Stylesheet already loaded
            setTimeout(() => this.onResourceLoaded(), 0);
            return;
        }

        element.addEventListener('load', onLoad);
        element.addEventListener('error', onError);
        
        // Additional timeout per resource (2 seconds max per resource)
        setTimeout(() => {
            if (element.removeEventListener) {
                element.removeEventListener('load', onLoad);
                element.removeEventListener('error', onError);
                console.log('Resource timeout, continuing:', element.src || element.href);
                this.onResourceLoaded();
            }
        }, 2000);
    }

    onResourceLoaded() {
        this.loadedResources++;
        this.updateProgress();
        
        if (this.loadedResources >= this.totalResources) {
            this.finishLoading();
        }
    }

    updateProgress() {
        const progress = this.totalResources > 0 ? 
            (this.loadedResources / this.totalResources) * 100 : 100;
        
        this.progressFill.style.width = `${progress}%`;
        this.loadingText.textContent = `Loading... ${Math.round(progress)}%`;
    }

    async finishLoading() {
        // Wait for minimum load time
        await this.minLoadTime;
        
        // Ensure progress shows 100%
        this.progressFill.style.width = '100%';
        this.loadingText.textContent = 'Complete!';
        
        // Small delay to show completion
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Hide loading screen and show content
        this.loadingScreen.classList.add('hidden');
        if (this.mainContent) {
            this.mainContent.classList.add('visible');
        }
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Initialize the loading screen
new LoadingScreen();

// Fallback: Force finish loading after 10 seconds
setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('content');
    
    if (!loadingScreen.classList.contains('hidden')) {
        console.log('Fallback: Force finishing loading after timeout');
        loadingScreen.classList.add('hidden');
        if (mainContent) {
            mainContent.classList.add('visible');
        }
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}, 10000);



