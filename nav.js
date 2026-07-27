const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown.querySelector("a");
const themeBtn = document.getElementById("themeBtn");
const rtlBtn = document.getElementById("rtlBtn");
const themeIcon = themeBtn.querySelector("i");
const header = document.querySelector(".header");



hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});



dropdownLink.addEventListener("click", function (e) {

    if (window.innerWidth <= 1100) {

        e.preventDefault();

        dropdown.classList.toggle("active");

    }

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 1100) {

        dropdown.classList.remove("active");

    }

});



window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});



const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});



const savedDirection = localStorage.getItem("direction");

if (savedDirection === "rtl") {

    document.documentElement.setAttribute("dir", "rtl");

    rtlBtn.classList.add("rtl-active");

} else {

    document.documentElement.setAttribute("dir", "ltr");

}

rtlBtn.addEventListener("click", () => {

    const currentDir = document.documentElement.getAttribute("dir");

    if (currentDir === "ltr") {

        document.documentElement.setAttribute("dir", "rtl");

        rtlBtn.classList.add("rtl-active");

        localStorage.setItem("direction", "rtl");

    } else {

        document.documentElement.setAttribute("dir", "ltr");

        rtlBtn.classList.remove("rtl-active");

        localStorage.setItem("direction", "ltr");

    }

});



document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});





const path = window.location.pathname.toLowerCase();

document.querySelectorAll(".nav-menu > li > a").forEach(link => {

    const href = link.getAttribute("href").toLowerCase();

    link.classList.remove("active");

    
    if (
        (path === "/" || path.endsWith("/index.html") || path.includes("/home-2/")) &&
        href === "/index.html"
    ) {
        link.classList.add("active");
    }


    if (path.includes("/about/") && href === "/about/about.html") {
        link.classList.add("active");
    }

 
    if (
        (path.includes("/services") || path.includes("service-detail")) &&
        href === "/services.html"
    ) {
        link.classList.add("active");
    }

  
    if (path.includes("/pricing/") && href === "/pricing/pricing.html") {
        link.classList.add("active");
    }

   
    if (
        (path.includes("/blog") || path.includes("blog-detail")) &&
        href === "/blog.html"
    ) {
        link.classList.add("active");
    }

  
    if (path.includes("/contact/") && href === "/contact/contact.html") {
        link.classList.add("active");
    }

});