document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".blog-hero");
    const magazineStack = document.querySelector(".magazine-3d-stack");

    if (heroSection && magazineStack && window.innerWidth > 900) {
        heroSection.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 22;
            const y = (e.clientY / window.innerHeight - 0.5) * 22;
            magazineStack.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
            magazineStack.style.transition = "transform 0.1s ease-out";
        });

        heroSection.addEventListener("mouseleave", () => {
            magazineStack.style.transform = "rotateY(0deg) rotateX(0deg)";
            magazineStack.style.transition = "transform 0.6s ease";
        });
    }

    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".category-card, .blog-card, .secret-card");
    revealElements.forEach((el, idx) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `opacity 0.6s ease ${idx * 0.06}s, transform 0.6s ease ${idx * 0.06}s`;
        revealObserver.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    const blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (!e.target.closest("a")) {
                const blogId = card.getAttribute("data-blog");
                if (blogId) {
                    window.location.href = `BlogDetails.html?blog=${blogId}`;
                }
            }
        });
        card.style.cursor = "pointer";
    });

    const blogSubscribeForm = document.getElementById("blogSubscribeForm");
    const blogSubscribeMsg = document.getElementById("blogSubscribeMsg");

    if (blogSubscribeForm && blogSubscribeMsg) {
        blogSubscribeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = blogSubscribeForm.querySelector("input[type='email']");
            if (emailInput && emailInput.value.trim() !== "") {
                blogSubscribeMsg.textContent = "🎉 Thank you for subscribing to Cho'ice World Dessert Stories!";
                blogSubscribeForm.reset();
                setTimeout(() => {
                    blogSubscribeMsg.textContent = "";
                }, 4000);
            }
        });
    }
});
