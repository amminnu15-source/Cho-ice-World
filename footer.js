const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");
const backToTop = document.getElementById("backToTop");
const yearEl = document.getElementById("year");



if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}



if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const emailInput = newsletterForm.querySelector("input[type='email']");

        if (emailInput.value.trim() !== "") {

            newsletterMsg.textContent = "🎉 Thanks for subscribing!";

            newsletterForm.reset();

            setTimeout(() => {

                newsletterMsg.textContent = "";

            }, 4000);

        }

    });

}



if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


