// LOCOMOTIVE
let scroll;

scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

// == REDIRECT == //
if (window.innerWidth < 1024) {
    window.location.href = "mobile_website-vi.html";
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
      position: 'bottom'
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
//PIE 2
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
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Bạn có quay Gacha sau khi thấy người khác quay Gacha không?',
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
      position: 'bottom'
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

//BAR 1
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
  maintainAspectRatio: false, // Let the container decide shape (square)
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
      'Có - Tôi cảm thấy nghiện',
      'Có lẽ',
      ['Không - Tôi không','cảm thấy nghiện']
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
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom'
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
          text: 'Bạn có nghĩ game gacha được tạo ra để gây nghiện không?'
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
        "Học sinh nên xây dựng nhận thức về tác động của game gacha, đặt giới hạn thời gian chơi hàng ngày và quản lý tài chính cá nhân hiệu quả. Thay thế thói quen chơi game bằng các hoạt động lành mạnh như thể thao, học kỹ năng mới hoặc tham gia câu lạc bộ có thể giúp giảm sự phụ thuộc. Quan trọng nhất, phát triển động lực nội tại là chìa khóa để cân bằng giải trí và học tập."
    ],
    school: [
        "Nhà trường có thể triển khai các chương trình giáo dục kỹ thuật số để giúp học sinh hiểu rủi ro của game gacha và quản lý thời gian trực tuyến tốt hơn. Các hoạt động ngoại khóa như thể thao, nghệ thuật hoặc nhóm học tập nên được khuyến khích để tạo ra các lựa chọn tích cực. Ngoài ra, giáo viên nên hợp tác với phụ huynh để hỗ trợ học sinh giảm dần thời gian chơi game."
    ],
    family: [
        "Gia đình đóng vai trò trung tâm trong việc hướng dẫn và giám sát thói quen chơi game của trẻ. Cha mẹ nên đồng hành cùng con, đặt ra các quy tắc sử dụng thiết bị hợp lý và khuyến khích thói quen lành mạnh. Tham gia các hoạt động ngoài trời hoặc tương tác xã hội cùng nhau có thể củng cố mối quan hệ gia đình và giảm sự phụ thuộc vào game."
    ],
    social: [
        "Cộng đồng và cơ quan quản lý nên siết chặt các quy tắc xung quanh cơ chế loot box và quản lý game gacha để giảm rủi ro gây nghiện. Tổ chức các không gian giải trí lành mạnh, hội thảo và chiến dịch nâng cao nhận thức có thể giúp học sinh tiếp cận thông tin chính xác. Xã hội cũng nên xây dựng môi trường giải trí đa dạng, an toàn để hỗ trợ giới trẻ đưa ra những lựa chọn tích cực hơn."
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
        this.loadingText.textContent = `Đang tải... ${Math.round(progress)}%`;
    }

    async finishLoading() {
        // Wait for minimum load time
        await this.minLoadTime;
        
        // Ensure progress shows 100%
        this.progressFill.style.width = '100%';
        this.loadingText.textContent = 'Hoàn tất!';
        
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