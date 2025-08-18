// Mobile-Optimized JavaScript

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

  // Touch/click to toggle
  section.addEventListener("click", (e) => {
    e.stopPropagation();
    isLockedOpen = !isLockedOpen;
    if (isLockedOpen) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });

  // Click outside to close
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

// SMOOTH SCROLLING NAVIGATION
document.getElementById("sec2-about").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-2").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("sec2").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-2").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("sec3").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-3").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("sec4").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-4").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("sec5").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-5").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
document.getElementById("sec6").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".section-6").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// MOBILE GAME CONTENT TOGGLE
function showContent(id) {
  // Hide all content
  document.querySelectorAll('.mobile-game-content').forEach(content => {
    content.classList.add('hidden');
  });
  
  // Reset all arrows
  document.querySelectorAll('.arrow-icon').forEach(arrow => {
    arrow.style.transform = 'rotate(0deg)';
  });
  
  // Show selected content
  const content = document.getElementById(`content-${id}`);
  const clickedItem = document.querySelector(`[onclick="showContent(${id})"]`);
  const arrow = clickedItem.querySelector('.arrow-icon');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    arrow.style.transform = 'rotate(0deg)';
  }
}

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.stats-title h1, .graph-container, .addict-title h1');
  animatedElements.forEach(el => observer.observe(el));
});

// ==== CHARTS SETUP ====
document.addEventListener('DOMContentLoaded', function() {
  // Set default font
  Chart.defaults.font.family = 'Nunito Sans';
  Chart.defaults.font.size = 12;

  // PIE CHART 1 - Time spent daily
  const pie1Data = {
    labels: [
'Dưới 1 giờ',
    'Từ 1 đến 2 giờ',
    'Từ 3 đến 4 giờ',
    'Trên 4 giờ'
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
        position: 'bottom',
        labels: {
          fontSize: 10,
          boxWidth: 12
        }
      },
      title: {
        display: true,
        text: 'Thời gian chơi game gacha mỗi ngày',
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

  // PIE CHART 2 - Social influence
  const pie2Data = {
    labels: ['Có', 'Đôi khi', 'Không bao giờ'],
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
        position: 'bottom',
        labels: {
          fontSize: 10,
          boxWidth: 12
        }
      },
      title: {
        display: true,
        text: 'Bạn có quay Gacha sau khi thấy người khác quay Gacha không?',
        font: {
          size: 12
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

  // PIE CHART 3 - Money spent
  const pie3Data = {
    labels: ['Không', '< 100.000₫', '100.000₫ - 500.000₫', '> 500.000₫'],
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
        position: 'bottom',
        labels: {
          fontSize: 10,
          boxWidth: 12
        }
      },
      title: {
        display: true,
        text: 'Số tiền chi tiêu cho game gacha',
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

  // BAR CHART 1 - Symptoms
const bar1Data = {
  labels: [
    ['Thường xuyên','nghĩ về','game gacha'],
    ['Lo lắng nếu','không chơi','game gacha'],
    ['Không có','triệu chứng']
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
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Triệu chứng ghi nhận ở học sinh',
        font: {
          size: 14
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          fontSize: 10
        }
      },
      x: {
        ticks: {
          fontSize: 9
        }
      }
    }
  };

  // BAR CHART 2 - Beliefs vs Addiction
  const bar2Data = {
    labels: [
      ['Có - Tôi cảm','thấy nghiện'],
      'Có lẽ',
      ['Không - Tôi','không cảm','thấy nghiện']
    ],
    datasets: [
      {
        label: 'Có',
        data: [5, 4, 0],
        backgroundColor: '#1f4e79'
      },
      {
        label: 'Có thể',
        data: [60, 72, 15],
        backgroundColor: '#f97316'
      },
      {
        label: 'Không',
        data: [35, 24, 85],
        backgroundColor: '#15803d'
      }
    ]
  };

  const bar2Options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 10,
          boxWidth: 12
        }
      },
       title: {
        display: true,
        text: 'Liên kết giữa niềm tin về thiết kế gacha và cảm giác nghiện'
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
          text: 'Bạn có nghĩ game gacha được tạo ra để gây nghiện không?',
          font: {
            size: 10
          }
        },
        ticks: {
          fontSize: 8
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: value => value + '%',
          fontSize: 10
        }
      }
    }
  };

  // Initialize charts
  new Chart(document.getElementById('pie1'), { 
    type: 'pie', 
    data: pie1Data, 
    options: pie1Options 
  });
  new Chart(document.getElementById('pie2'), { 
    type: 'pie', 
    data: pie2Data, 
    options: pie2Options 
  });
  new Chart(document.getElementById('pie3'), { 
    type: 'pie', 
    data: pie3Data, 
    options: pie3Options 
  });
  new Chart(document.getElementById('bar1'), { 
    type: 'bar', 
    data: bar1Data, 
    options: bar1Options 
  });
  new Chart(document.getElementById('bar2'), {
    type: 'bar',
    data: bar2Data,
    options: bar2Options
  });
});

// TOUCH GESTURES FOR MOBILE
let startY;
let currentY;

document.addEventListener('touchstart', function(e) {
  startY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
  currentY = e.touches[0].clientY;
}, { passive: true });

// LAZY LOADING FOR IMAGES
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// PERFORMANCE OPTIMIZATION
window.addEventListener('load', function() {
  // Remove loading states
  document.body.classList.add('loaded');
  
  // Initialize animations after page load
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
    }, index * 100);
  });
});

// PREVENT ZOOM ON DOUBLE TAP (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

// VIEWPORT HEIGHT FIX FOR MOBILE
function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);
setViewportHeight();



// Section Load Animation JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // Create intersection observer for section animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger when section is 10% visible
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('loaded')) {
        // Add 'loaded' class to trigger animations
        entry.target.classList.add('loaded');
        
        // Optional: Stop observing this section once loaded (one-time animation)
        // sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections that have animations
  const sectionsToAnimate = [
    '.section-2',
    '.section-3', 
    '.section-4',
    '.section-5',
    '.section-6',
    '.section-7',
    '.section-end'
  ];

  sectionsToAnimate.forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
      sectionObserver.observe(section);
    }
  });

  // Optional: Add a small delay for mobile devices to ensure smooth performance
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    // Add slight delay on mobile for better performance
    setTimeout(() => {
      document.body.classList.add('animations-ready');
    }, 100);
  } else {
    document.body.classList.add('animations-ready');
  }

  // Handle scroll performance for mobile
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Any additional scroll-based animations can go here
        ticking = false;
      });
      ticking = true;
    }
  }

  // Throttle scroll events for better mobile performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Optional: Preload first section immediately
  const firstSection = document.querySelector('.section-2');
  if (firstSection) {
    setTimeout(() => {
      firstSection.classList.add('loaded');
    }, 500); // Delay for page load
  }
});

// SCROLL TO TOP
document.addEventListener('DOMContentLoaded', function() {
  // Force scroll to top when page loads/reloads
  window.scrollTo(0, 0);
  
  // Additional backup methods for different browsers
  if (document.documentElement) {
    document.documentElement.scrollTop = 0;
  }
  if (document.body) {
    document.body.scrollTop = 0;
  }
});
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}


// Combined Device Detection and Redirect Logic
document.addEventListener('DOMContentLoaded', function() {
  
  // Check if device should redirect to laptop version
  function shouldRedirectToLaptop() {
    const screenWidth = Math.min(window.innerWidth, window.innerHeight);
    const currentWidth = window.innerWidth;
    
    // Touch capability detection
    const hasTouch = 'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0 || 
                     navigator.msMaxTouchPoints > 0;
    
    // Mouse/scroll capability detection
    const hasMouseScroll = !hasTouch || // No touch = has mouse
                          window.matchMedia('(pointer: fine)').matches; // Fine pointer = mouse
    
    // Redirect conditions:
    // 1. Screen width > 1024px AND has mouse scroll capability
    if (currentWidth > 1024 && hasMouseScroll) {
      return true;
    }
    
    return false;
  }
  
  // Redirect to laptop version if conditions are met
  if (shouldRedirectToLaptop()) {
    window.location.href = 'index-vi.html';
    return; // Stop execution
  }
  
  // Continue with landscape warning for remaining devices
  
  // Create overlay element
  const landscapeOverlay = document.createElement('div');
  landscapeOverlay.id = 'landscape-warning';
  landscapeOverlay.innerHTML = `
    <div class="landscape-content">
      <div class="rotate-icon">📱</div>
      <h2>Please Rotate Your Device</h2>
      <p>This website is optimized for portrait mode.<br>Please rotate your device to vertical orientation.</p>
    </div>
  `;
  
  // Add overlay styles
  const overlayStyles = `
    #landscape-warning {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      color: white;
      font-family: Arial, sans-serif;
    }
    
    .landscape-content {
      text-align: center;
      padding: 40px;
      max-width: 400px;
    }
    
    .rotate-icon {
      font-size: 80px;
      margin-bottom: 20px;
      animation: rotateDevice 2s ease-in-out infinite;
    }
    
    .landscape-content h2 {
      font-size: 24px;
      margin-bottom: 16px;
      color: #fff;
    }
    
    .landscape-content p {
      font-size: 16px;
      line-height: 1.5;
      color: #ccc;
      margin: 0;
    }
    
    @keyframes rotateDevice {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(90deg); }
      75% { transform: rotate(90deg); }
    }
    
    /* Show overlay only on phones in landscape (exclude tablets) */
    @media screen and (max-device-width: 767px) and (orientation: landscape) {
      #landscape-warning {
        display: flex !important;
      }
      
      body {
        overflow: hidden;
      }
    }
  `;
  
  // Add styles to head
  const styleElement = document.createElement('style');
  styleElement.textContent = overlayStyles;
  document.head.appendChild(styleElement);
  
  // Add overlay to body
  document.body.appendChild(landscapeOverlay);
  
  // Function to check orientation and device
  function checkOrientation() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Get both dimensions to check regardless of current orientation
    const screenWidth = Math.min(window.innerWidth, window.innerHeight);
    const screenHeight = Math.max(window.innerWidth, window.innerHeight);
    
    // Detect tablets/iPads (exclude them from landscape restriction)
    const isTablet = /ipad/.test(userAgent) || 
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || // iPad Pro
                    /tablet/.test(userAgent) || 
                    (screenWidth >= 768); // Use smaller dimension for tablet detection
    
    // Only target phones (smaller mobile devices)
    // Check if it's a mobile device AND the smaller dimension is less than 768px
    const isMobileDevice = /android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isPhone = isMobileDevice && screenWidth < 768;
    
    const isLandscape = window.innerWidth > window.innerHeight;
    
    console.log('Debug:', { screenWidth, screenHeight, isTablet, isPhone, isLandscape }); // Debug log
    
    // Only show overlay for phones in landscape mode (exclude tablets)
    if (isPhone && isLandscape && !isTablet) {
      landscapeOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    } else {
      landscapeOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  
  // Check orientation on load
  checkOrientation();
  
  // Listen for orientation changes
  window.addEventListener('orientationchange', function() {
    // Add small delay to ensure orientation change is complete
    setTimeout(checkOrientation, 100);
  });
  
  // Listen for resize events (backup for orientation change)
  window.addEventListener('resize', function() {
    checkOrientation();
  });
  
  // Additional check for screen orientation API (modern browsers)
  if (screen.orientation) {
    screen.orientation.addEventListener('change', function() {
      setTimeout(checkOrientation, 100);
    });
  }
});


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



