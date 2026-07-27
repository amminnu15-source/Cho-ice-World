const revealElements = document.querySelectorAll(".reveal-left, .reveal-right");

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.25
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});

















const statSection = document.querySelector(".stats-section");
const statCards = document.querySelectorAll(".reveal-up");
const counters = document.querySelectorAll(".counter");

let statsStarted = false;

const statsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting && !statsStarted){

            statsStarted = true;

         

            statCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("active");

                },index * 180);

            });

          

            counters.forEach(counter=>{

                const target = +counter.dataset.target;

                let current = 0;

                const speed = target / 80;

                const updateCounter = ()=>{

                    if(current < target){

                        current += speed;

                        counter.innerText = Math.ceil(current);

                        requestAnimationFrame(updateCounter);

                    }else{

                        counter.innerText = target;

                    }

                }

                updateCounter();

            });

        }

    });

},{
    threshold:0.3
});

statsObserver.observe(statSection);











const teamCards = document.querySelectorAll(".team-card");


window.addEventListener("scroll",()=>{

    teamCards.forEach(card=>{

        let position = card.getBoundingClientRect().top;

        let screen = window.innerHeight;


        if(position < screen - 100){

            card.style.opacity="1";
            card.style.transform="translateY(0)";

        }

    });

});



teamCards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="0.8s ease";

});












document.addEventListener('DOMContentLoaded', function () {

    const revealTargets = document.querySelectorAll(
        '.journey-section .reveal-left, ' +
        '.journey-section .reveal-right, ' +
        '.about-testimonials .reveal-up'
    );

    if (!revealTargets.length) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        revealTargets.forEach(el => observer.observe(el));
    } else {
        // Fallback for very old browsers — just show everything.
        revealTargets.forEach(el => el.classList.add('show'));
    }

});
