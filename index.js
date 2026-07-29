document.addEventListener('DOMContentLoaded', function () {

    const heroSection = document.querySelector(".hero");
    const heroDecos = document.querySelectorAll(".hero-deco, .hero-sketch-heart, .hero-crumb");

    if (heroSection && window.innerWidth > 900) {

        heroSection.addEventListener("mousemove", (e) => {

            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            heroDecos.forEach((el, i) => {

                const depth = (i % 3 + 1) * 0.5;

                el.style.marginLeft = `${x * depth}px`;
                el.style.marginTop = `${y * depth}px`;

            });

        });

    }

});







document.addEventListener("DOMContentLoaded", function () {

  
    const signatureSwiper = new Swiper(".signatureSlider", {

        effect: "slide",

        slidesPerView: 1,
        spaceBetween: 25,

        loop: true,

        speed: 800,

        grabCursor: true,

        centeredSlides: false,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        breakpoints: {

            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 25
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }

        }

    });

 
    document.querySelectorAll(".product-bottom button").forEach(function (button) {

        button.addEventListener("click", function () {

            const icon = this.querySelector("i");

            this.classList.add("added");

            if (icon) {
                icon.className = "fa-solid fa-check";
            }

            setTimeout(() => {

                this.classList.remove("added");

                if (icon) {
                    icon.className = "fa-solid fa-cart-shopping";
                }

            }, 1200);

        });

    });

});









document.addEventListener('DOMContentLoaded', () => {



    const animatedElements = document.querySelectorAll('.fade-left, .fade-right');

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => revealObserver.observe(el));










    const aboutBtn = document.querySelector('.about-btn');

    if (aboutBtn) {

        aboutBtn.addEventListener('click', function (e) {

            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';

            const rect = this.getBoundingClientRect();

            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);

        });

    }

});










document.addEventListener("DOMContentLoaded", () => {



    const revealItems = document.querySelectorAll(
        ".fade-left, .fade-right, .fade-up"
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold:0.2

    });

    revealItems.forEach(item => revealObserver.observe(item));




    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.count);

            let current = 0;

            const increment = Math.ceil(target / 40);

            function updateCounter(){

                current += increment;

                if(current < target){

                    counter.innerHTML = current;

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target === 25){

                        counter.innerHTML = "25K+";

                    }

                    else{

                        counter.innerHTML = target + "+";

                    }

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });

});








document.addEventListener('DOMContentLoaded', function () {

    const builder = document.getElementById('builder');
    if (!builder) return;

    const typeTabs = document.getElementById('typeTabs');
    const builderImage = document.getElementById('builderImage');
    const priceEl = document.getElementById('estimatedPrice');
    const orderBtn = document.getElementById('orderBtn');
    const toast = document.getElementById('orderToast');
    const toastDetail = document.getElementById('toastDetail');
    const toastClose = document.getElementById('toastClose');

 
    const visualImages = {
        'Ice Cream': {
            Chocolate: 'images/icecream-chocolate.png',
            Vanilla: 'images/icecream-vanilla.png',
            Strawberry: 'images/icecream-strawberry.png',
            Mango: 'images/icecream-mango.png'
        },
        'Milkshake': {
            Chocolate: 'images/milkshake-chocolate.png',
            Vanilla: 'images/milkshake-vanilla.png',
            Strawberry: 'images/milkshake-strawberry.png',
            Mango: 'images/milkshake-mango.png'
        }
    };

    let state = {
        type: 'Ice Cream',
        flavour: 'Chocolate',
        sauce: 'Chocolate',
        toppings: [],
        size: 'Medium',
        sizePrice: 199
    };

   
    builder.querySelectorAll('[data-group="toppings"] .option-card.active').forEach(card => {
        state.toppings.push({ name: card.dataset.value, price: parseInt(card.dataset.price, 10) || 0 });
    });

  
    function updateVisual() {
        const byType = visualImages[state.type] || {};
        const src = byType[state.flavour] || 'images/ice-cream-bowl.png';

        if (!builderImage) return;

        builderImage.style.opacity = '0';
        setTimeout(() => {
            builderImage.setAttribute('src', src);
            builderImage.style.opacity = '1';
        }, 200);
    }

  
    if (typeTabs) {
        typeTabs.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                typeTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                state.type = btn.dataset.type;
                updateVisual();
            });
        });
    }

  
    builder.querySelectorAll('.option-group[data-mode="single"]').forEach(group => {
        const groupName = group.dataset.group;
        const cards = group.querySelectorAll('.option-card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                state[groupName] = card.dataset.value;

                // Only Flavour drives the center visual — Sauce is a
                // topping-level detail, not a different product shot.
                if (groupName === 'flavour') {
                    updateVisual();
                }
            });
        });
    });

   
    const toppingsGroup = builder.querySelector('.option-group[data-group="toppings"]');
    if (toppingsGroup) {
        toppingsGroup.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');

                const name = card.dataset.value;
                const price = parseInt(card.dataset.price, 10) || 0;

                if (card.classList.contains('active')) {
                    if (!state.toppings.some(t => t.name === name)) {
                        state.toppings.push({ name, price });
                    }
                } else {
                    state.toppings = state.toppings.filter(t => t.name !== name);
                }

                updatePrice();
            });
        });
    }


    builder.querySelectorAll('.size-card').forEach(card => {
        card.addEventListener('click', () => {
            builder.querySelectorAll('.size-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            state.size = card.dataset.value;
            state.sizePrice = parseInt(card.dataset.price, 10) || 0;

            updatePrice();
        });
    });

   
    function calculateTotal() {
        const toppingsTotal = state.toppings.reduce((sum, t) => sum + t.price, 0);
        return state.sizePrice + toppingsTotal;
    }

    function updatePrice() {
        const total = calculateTotal();
        if (priceEl) {
            priceEl.textContent = total;
        }
    }

    updatePrice();

   
    let toastTimer = null;

    function showToast() {
        const total = calculateTotal();
        const toppingsText = state.toppings.length
            ? ` + ${state.toppings.map(t => t.name).join(', ')}`
            : '';

        if (toastDetail) {
            toastDetail.textContent = `${state.flavour} ${state.type} · ${state.size}${toppingsText} · \u20B9${total}`;
        }

        if (toast) {
            toast.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }
    }

    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            orderBtn.style.transform = 'scale(.96)';
            setTimeout(() => { orderBtn.style.transform = ''; }, 150);
            showToast();
        });
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });
    }

});