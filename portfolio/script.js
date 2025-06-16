
// Menu điều hướng cố định
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Hiển thị/ẩn nút điều hướng cố định và nút cuộn dựa trên vị trí cuộn
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Menu điều hướng bên
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Mở điều hướng bên
menuBtn.onclick = function () {
  navBar.classList.add("active"); 
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Đóng điều hướng bên
cancelBtn.onclick = hideNavMenu;

// Đóng điều hướng bên khi nhấp vào liên kết menu
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Xử lý sự kiên click phần project và certifiacte
const dataAnalyticsCertifiacteButton = document.getElementById('viewDataAnalyticsCertifiacte');
const googleAICertifiacteButton = document.getElementById('viewGoogleAICertifiacte');
const loanProjectButton = document.getElementById('viewLoanProject');
const gameProjectButton = document.getElementById('viewTetrisProject');

if (dataAnalyticsCertifiacteButton) {
  dataAnalyticsCertifiacteButton.addEventListener('click', () => {
    window.open('https://coursera.org/share/8a00816e58e3a9dac023f2cc4ad8a828', '_blank');
  });
}


if (googleAICertifiacteButton) {
  googleAICertifiacteButton.addEventListener('click', () => {
    window.open('https://coursera.org/share/52ccc0ae02654be056196a76bf731cc6', '_blank');
  });
}
if (loanProjectButton) {
  loanProjectButton.addEventListener('click', () => {
    window.open('https://github.com/Tran-Quynh-Cam/Project1-data-ml', '_blank');
  });
}
if (gameProjectButton) {
  gameProjectButton.addEventListener('click', () => {
    window.open('https://github.com/Tran-Quynh-Cam/tetris-game', '_blank');
  }
  );
}

// Hiệu ứng trượt từ trái sang phải cho phần Home
const homeSection = document.querySelector('#home');
const homeTexts = homeSection.querySelectorAll('.home-content div');

function animateHomeText() {
  homeTexts.forEach((el, index) => {
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.style.animation = `slideInLeft 1s ease-out forwards`;
    el.style.animationDelay = `${0.2 + index * 0.2}s`;
  });
}

// Kích hoạt hiệu ứng khi cuộn đến phần Home
const homeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateHomeText();
    }
  });
}, {
  threshold: 0.3
});

homeObserver.observe(homeSection);


// Hiệu ứng riêng cho phần About
const aboutSection = document.querySelector('#about');
const aboutImage = aboutSection.querySelector('.left');
const aboutText = aboutSection.querySelector('.right');

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutImage.classList.add('slide-in-left');
      aboutText.classList.add('slide-in-right');
    } else {
      aboutImage.classList.remove('slide-in-left');
      aboutText.classList.remove('slide-in-right');
    }
  });
}, {
  threshold: 0.3
});
aboutObserver.observe(aboutSection);

// Hiệu ứng trượt từ dưới lên cho phần Career
const careerSection = document.querySelector('#career');

const careerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      careerSection.classList.add('slide-in-up');
    } else {
      careerSection.classList.remove('slide-in-up');
    }
  });
}, {
  threshold: 0.3
});

careerObserver.observe(careerSection);

// Hiện cả 4 ô sở thích cùng lúc khi cuộn đến cho Hobbies
const hobbiesSection = document.querySelector('.hobbies-details');

const hobbiesObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hobbiesSection.classList.add('visible');
    } else {
      hobbiesSection.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
});

hobbiesObserver.observe(hobbiesSection);

// Hiệu ứng trượt từ dưới lên cho phần Languages & Skills
const skillsSection = document.querySelector('#skills');

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillsSection.classList.add('slide-in-up');
    } else {
      skillsSection.classList.remove('slide-in-up');
    }
  });
}, {
  threshold: 0.3
});

skillsObserver.observe(skillsSection);

// Hiệu ứng hiện lên cho phần Certificates & Awards
const achievementsSection = document.querySelector('.achievements');

const achievementsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      achievementsSection.classList.add('visible');
    } else {
      achievementsSection.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
});

achievementsObserver.observe(achievementsSection);

// Hiệu ứng hiện lên cho phần Projects
const projectsSection = document.querySelector('.projects');
const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      projectsSection.classList.add('visible');
    } else {
      projectsSection.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
});
projectsObserver.observe(projectsSection);

// Hiệu ứng trượt từ dưới lên cho phần Loan Prediction
const loanPredictionSection = document.querySelector('#loan-prediction');
const loanPredictionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loanPredictionSection.classList.add('slide-in-up');
    } else {
      loanPredictionSection.classList.remove('slide-in-up');
    }
  });
}, {
  threshold: 0.3
});
loanPredictionObserver.observe(loanPredictionSection);

// Hiệu ứng trượt từ dưới lên cho phần Tetris Game
const tetrisGameSection = document.querySelector('#tetris-game');
const tetrisGameObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tetrisGameSection.classList.add('slide-in-up');
    } else {
      tetrisGameSection.classList.remove('slide-in-up');
    }
  });
}, {
  threshold: 0.3
});
tetrisGameObserver.observe(tetrisGameSection);

// Hiệu ứng hiện lên cho phần Contact
const contactSection = document.querySelector('#contact');
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactSection.classList.add('slide-in-up');
    } else {
      contactSection.classList.remove('slide-in-up');
    }
  });
}, {
  threshold: 0.3
});
contactObserver.observe(contactSection);

