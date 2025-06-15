// Khi trang được tải, kích hoạt hiệu ứng animation "slideInLeft" cho các phần tử văn bản trong phần "Home"
const homeSection = document.querySelector("#home");
const homeTexts = homeSection.querySelectorAll(".home-content div");

function animateHomeText() {
  homeTexts.forEach((el, index) => {
    el.style.animation = "none"; 
    el.offsetHeight; 
    el.style.animation = `slideInLeft 1s ease-out forwards`;
    el.style.animationDelay = `${0.2 + index * 0.2}s`;
  });
}

// Gọi lại hiệu ứng khi nhấn vào link Home
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(animateHomeText, 300); 
  });
});

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
