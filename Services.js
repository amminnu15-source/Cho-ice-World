document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".services-hero");
    const floatingDecos = document.querySelectorAll(".floating-deco");

    if (heroSection && window.innerWidth > 900) {
        heroSection.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            floatingDecos.forEach((el, index) => {
                const depth = (index + 1) * 0.4;
                el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
            });
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

    const revealElements = document.querySelectorAll(".service-card, .reason-card, .timeline-step, .stat-card, .review-card, .celebration-card");
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

    const statNumbers = document.querySelectorAll(".stat-number");
    
    const startCounter = (el) => {
        const target = parseFloat(el.getAttribute("data-target"));
        const suffix = el.getAttribute("data-suffix") || "";
        const decimals = parseInt(el.getAttribute("data-decimals")) || 0;
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        const increment = target / steps;

        const updateCount = () => {
            current += increment;
            if (current >= target) {
                el.innerText = target.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
            } else {
                el.innerText = current.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
                setTimeout(updateCount, stepTime);
            }
        };

        updateCount();
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(num => {
        statsObserver.observe(num);
    });

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (!e.target.closest("a")) {
                const serviceId = card.getAttribute("data-service");
                if (serviceId) {
                    window.location.href = `ServiceDetails.html?service=${serviceId}`;
                }
            }
        });
        card.style.cursor = "pointer";
    });
});
