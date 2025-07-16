// ===== SMOOTH SCROLLING =====
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const navHeight = document.querySelector(".navbar").offsetHeight;
    const elementPosition = element.offsetTop - navHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}

// ===== NAVBAR FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking on nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active nav link highlighting
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section[id]");
    const navHeight = navbar.offsetHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

// ===== CV DOWNLOAD =====
document.getElementById("btn-cv").addEventListener("click", () => {
  // Tạo một link tạm thời để download file CV
  const link = document.createElement("a");
  link.href = "assets/CV_DatNguyen.pdf"; // Đường dẫn đến file CV
  link.download = "CV_DatNguyen_FullStackDeveloper.pdf";
  link.click();

  // Hiển thị thông báo
  showNotification("CV đang được tải xuống...", "success");
});

// ===== CONTACT FORM =====
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Lấy dữ liệu form
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      // Validate form
      if (validateForm(data)) {
        // Simulate sending email
        simulateEmailSend(data);
      }
    });
  }
});

function validateForm(data) {
  const { name, email, subject, message } = data;

  if (!name || name.trim().length < 2) {
    showNotification("Vui lòng nhập họ tên hợp lệ", "error");
    return false;
  }

  if (!email || !isValidEmail(email)) {
    showNotification("Vui lòng nhập email hợp lệ", "error");
    return false;
  }

  if (!subject || subject.trim().length < 5) {
    showNotification("Vui lòng nhập chủ đề (tối thiểu 5 ký tự)", "error");
    return false;
  }

  if (!message || message.trim().length < 10) {
    showNotification(
      "Vui lòng nhập nội dung tin nhắn (tối thiểu 10 ký tự)",
      "error"
    );
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function simulateEmailSend(data) {
  // Hiển thị loading
  showNotification("Đang gửi tin nhắn...", "info");

  // Simulate API call
  setTimeout(() => {
    showNotification(
      `Cảm ơn ${data.name}! Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi trong thời gian sớm nhất.`,
      "success"
    );

    // Reset form
    document.querySelector(".contact-form").reset();

    // Optionally, redirect to email client
    const mailtoLink = `mailto:datjpro@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Từ: ${data.name} (${data.email})\n\n${data.message}`
    )}`;
    window.open(mailtoLink);
  }, 1500);
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === "success" ? "✓" : type === "error" ? "✗" : "ℹ"}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
        font-family: 'Inter', sans-serif;
        ${
          type === "success"
            ? "background: #d4edda; color: #155724; border-left: 4px solid #28a745;"
            : type === "error"
            ? "background: #f8d7da; color: #721c24; border-left: 4px solid #dc3545;"
            : "background: #d1ecf1; color: #0c5460; border-left: 4px solid #17a2b8;"
        }
    `;

  // Add to page
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "slideOutRight 0.3s ease-out";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Add notification animations to head
if (!document.querySelector("#notification-styles")) {
  const style = document.createElement("style");
  style.id = "notification-styles";
  style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            opacity: 0.7;
            margin-left: auto;
        }
        .notification-close:hover {
            opacity: 1;
        }
    `;
  document.head.appendChild(style);
}

// ===== ANIMATIONS ON SCROLL =====
function animateOnScroll() {
  const animatedElements = document.querySelectorAll(
    ".skill-bar, .feature-card, .project-card, .timeline-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("skill-bar")) {
            const level = entry.target.getAttribute("data-level");
            entry.target.style.width = level + "%";
          }

          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";

    let index = 0;
    const typeSpeed = 100;

    function typeText() {
      if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typeSpeed);
      }
    }

    // Start typing after a short delay
    setTimeout(typeText, 1000);
  }
}

// ===== PARALLAX EFFECT =====
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".hero");

    parallaxElements.forEach((element) => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ===== INITIALIZE ALL FUNCTIONS =====
document.addEventListener("DOMContentLoaded", function () {
  animateOnScroll();
  initParallax();

  // Add loading animation
  document.body.classList.add("loaded");
});

// ===== THEME TOGGLE (OPTIONAL) =====
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
      );
    });

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// ===== PERFORMANCE MONITORING =====
function logPerformance() {
  window.addEventListener("load", () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Trang tải xong trong ${pageLoadTime}ms`);
  });
}

// Initialize performance monitoring
logPerformance();
