/* ==========================================
   ELEMENTS
========================================== */

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const themeBtn = document.getElementById("themeBtn");
const rtlBtn = document.getElementById("rtlBtn");

const themeIcon = themeBtn.querySelector("i");

const dropdowns = document.querySelectorAll(".dropdown");


/* ==========================================
   HAMBURGER
========================================== */

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});


/* ==========================================
   MOBILE DROPDOWN
========================================== */

dropdowns.forEach(dropdown => {

    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 1100) {

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});


/* ==========================================
   CLOSE MENU WHEN CLICKING NORMAL LINKS
========================================== */

document.querySelectorAll(".nav-menu li:not(.dropdown) a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   CLICK OUTSIDE
========================================== */

document.addEventListener("click", function (e) {

    if (
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

        dropdowns.forEach(item => item.classList.remove("active"));

    }

});


/* ==========================================
   RESIZE
========================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 1100) {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

        dropdowns.forEach(item => item.classList.remove("active"));

    }

});


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

        dropdowns.forEach(item => item.classList.remove("active"));

    }

});


/* ==========================================
   STICKY HEADER
========================================== */

function stickyHeader() {

    if (window.scrollY > 40) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

}

stickyHeader();

window.addEventListener("scroll", stickyHeader);


/* ==========================================
   THEME
========================================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.replace("fa-moon", "fa-sun");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeIcon.classList.replace("fa-moon", "fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.classList.replace("fa-sun", "fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* ==========================================
   RTL
========================================== */

const savedDirection = localStorage.getItem("direction");

if (savedDirection === "rtl") {

    document.documentElement.setAttribute("dir", "rtl");

    rtlBtn.classList.add("rtl-active");

}

rtlBtn.addEventListener("click", () => {

    const dir = document.documentElement.getAttribute("dir");

    if (dir === "ltr") {

        document.documentElement.setAttribute("dir", "rtl");

        rtlBtn.classList.add("rtl-active");

        localStorage.setItem("direction", "rtl");

    } else {

        document.documentElement.setAttribute("dir", "ltr");

        rtlBtn.classList.remove("rtl-active");

        localStorage.setItem("direction", "ltr");

    }

});


/* ==========================================
   ACTIVE MENU
========================================== */

const currentPath = window.location.pathname.toLowerCase();

document.querySelectorAll(".nav-menu > li > a").forEach(link => {

    const href = link.getAttribute("href").toLowerCase();

    link.classList.remove("active");

    if (
        (currentPath === "/" ||
        currentPath.endsWith("/index.html") ||
        currentPath.includes("/home-2/")) &&
        href === "/index.html"
    ) {
        link.classList.add("active");
    }

    if (
        currentPath.includes("/about/") &&
        href === "/about/about.html"
    ) {
        link.classList.add("active");
    }

    if (
        (currentPath.includes("/services") ||
        currentPath.includes("service-detail")) &&
        href === "/services.html"
    ) {
        link.classList.add("active");
    }

    if (
        currentPath.includes("/pricing/") &&
        href === "/pricing/pricing.html"
    ) {
        link.classList.add("active");
    }

    if (
        (currentPath.includes("/blog") ||
        currentPath.includes("blog-detail")) &&
        href === "/blog.html"
    ) {
        link.classList.add("active");
    }

    if (
        currentPath.includes("/contact/") &&
        href === "/contact/contact.html"
    ) {
        link.classList.add("active");
    }

});







document.addEventListener("DOMContentLoaded", () => {

    const navMenu = document.querySelector(".nav-menu");
    const desktopLogin = document.querySelector(".login-btn");

    if (navMenu && desktopLogin && !document.querySelector(".mobile-login")) {

        const li = document.createElement("li");
        li.className = "mobile-login";

        li.innerHTML = `
            <a href="${desktopLogin.getAttribute("href")}" class="mobile-login-btn">
                <i class="fa-regular fa-user"></i>
                Login
            </a>
        `;

        navMenu.appendChild(li);
    }

});