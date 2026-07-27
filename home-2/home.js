document.addEventListener("DOMContentLoaded",()=>{

    const hero=document.querySelector(".hero-two");

    hero.classList.add("loaded");

});


document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => observer.observe(card));

});











const favoriteItems = document.querySelectorAll(".fade-up");

const favoriteObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

favoriteItems.forEach((item) => {

    favoriteObserver.observe(item);

});




const gallery = document.querySelector(".favorites-gallery");

if (gallery) {

    gallery.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 45;
        const y = (window.innerHeight / 2 - e.pageY) / 45;

        gallery.querySelector(".gallery-large").style.transform =
            `translate(${x}px, ${y}px)`;

        gallery.querySelector(".gallery-small").style.transform =
            `translate(${-x}px, ${-y}px)`;

        gallery.querySelector(".gallery-bottom").style.transform =
            `translate(${x/2}px, ${-y/2}px)`;

    });

    gallery.addEventListener("mouseleave", () => {

        gallery.querySelector(".gallery-large").style.transform = "";

        gallery.querySelector(".gallery-small").style.transform = "";

        gallery.querySelector(".gallery-bottom").style.transform = "";

    });

}




document.querySelectorAll(".favorite-item").forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transition = ".35s";

    });

});




document.querySelectorAll(".btn-main").forEach((btn) => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});















document.addEventListener("DOMContentLoaded", () => {

    const galleryItems = document.querySelectorAll(
        ".fade-up,.fade-down,.fade-left,.fade-right"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.18
    });

    galleryItems.forEach((item) => {

        observer.observe(item);

    });

});















document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right, .zoom-in"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    items.forEach((item) => {

        observer.observe(item);

    });

});






document.addEventListener('DOMContentLoaded', function () {

    const section = document.getElementById('combos');
    if (!section) return;

    const toast = document.getElementById('comboToast');
    const toastDetail = document.getElementById('comboToastDetail');
    const toastClose = document.getElementById('comboToastClose');
    let toastTimer = null;

    section.querySelectorAll('.combo-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const name = btn.dataset.name || 'Combo';
            const price = btn.dataset.price || '0';

            if (toastDetail) {
                toastDetail.textContent = `${name} · \u20B9${price}`;
            }

            if (toast) {
                toast.classList.add('show');
                clearTimeout(toastTimer);
                toastTimer = setTimeout(() => {
                    toast.classList.remove('show');
                }, 3800);
            }

            btn.style.transform = 'scale(.96)';
            setTimeout(() => { btn.style.transform = ''; }, 150);
        });
    });

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });
    }


    const revealTargets = section.querySelectorAll('.reveal-up');

    if ('IntersectionObserver' in window && revealTargets.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, i * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(el => observer.observe(el));
    } else {
        revealTargets.forEach(el => el.classList.add('in-view'));
    }

});











document.addEventListener('DOMContentLoaded', function () {

    const section = document.getElementById('seasonal');
    if (!section) return;

 
    const countdownTarget = new Date();
    countdownTarget.setDate(countdownTarget.getDate() + 21);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    function pad(num) {
        return String(num).padStart(2, '0');
    }

    function updateCountdown() {
        const now = new Date();
        let diff = Math.max(0, countdownTarget - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        const mins = Math.floor(diff / (1000 * 60));
        diff -= mins * (1000 * 60);

        const secs = Math.floor(diff / 1000);

        if (dEl) dEl.textContent = pad(days);
        if (hEl) hEl.textContent = pad(hours);
        if (mEl) mEl.textContent = pad(mins);
        if (sEl) sEl.textContent = pad(secs);
    }

    if (dEl) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

   
    const toast = document.getElementById('seasonalToast');
    const toastTitle = document.getElementById('seasonalToastTitle');
    const toastDetail = document.getElementById('seasonalToastDetail');
    const toastClose = document.getElementById('seasonalToastClose');
    let toastTimer = null;

    function showToast(title, detail) {
        if (toastTitle) toastTitle.textContent = title;
        if (toastDetail) toastDetail.textContent = detail;

        if (toast) {
            toast.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 3800);
        }
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });
    }

   
    section.querySelectorAll('.seasonal-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();

            const name = card.querySelector('h3')?.textContent.trim() || 'Seasonal Special';
            const price = card.querySelector('.seasonal-price')?.textContent.trim() || '';

            showToast('Added to Cart!', `${name} · ${price}`);
        });
    });

   
    const notifyForm = document.getElementById('notifyForm');

    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = notifyForm.querySelector('input[type="email"]');
            if (!emailInput || !emailInput.value.trim()) return;

            showToast('You\'re on the list!', 'We\'ll email you when the next season drops.');
            notifyForm.reset();
        });
    }

  
    const revealTargets = section.querySelectorAll('.reveal-up');

    if ('IntersectionObserver' in window && revealTargets.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, i * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(el => observer.observe(el));
    } else {
        revealTargets.forEach(el => el.classList.add('in-view'));
    }

});














document.addEventListener("DOMContentLoaded", () => {



    const orderBtn = document.getElementById("orderBtn");

    const popup = document.getElementById("orderPopup");

    const closePopup = document.getElementById("closePopup");

    const confirmOrder = document.getElementById("confirmOrder");

    const successPopup = document.getElementById("successPopup");

    const minusBtn = document.getElementById("minusQty");

    const plusBtn = document.getElementById("plusQty");

    const qty = document.getElementById("qty");

    let count = 1;



    orderBtn.addEventListener("click", () => {

        popup.classList.add("active");

        document.body.style.overflow = "hidden";

    });



    function closeOrderPopup(){

        popup.classList.remove("active");

        document.body.style.overflow = "auto";

    }

    closePopup.addEventListener("click", closeOrderPopup);



    popup.addEventListener("click",(e)=>{

        if(e.target===popup){

            closeOrderPopup();

        }

    });



    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeOrderPopup();

        }

    });

 

    plusBtn.addEventListener("click",()=>{

        count++;

        qty.textContent=count;

    });

    minusBtn.addEventListener("click",()=>{

        if(count>1){

            count--;

            qty.textContent=count;

        }

    });



    confirmOrder.addEventListener("click",()=>{

        popup.classList.remove("active");

        successPopup.classList.add("active");

        setTimeout(()=>{

            successPopup.classList.remove("active");

            document.body.style.overflow="auto";

            count=1;

            qty.textContent=count;

        },2200);

    });



    const items=document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    items.forEach((item)=>{

        observer.observe(item);

    });

});











