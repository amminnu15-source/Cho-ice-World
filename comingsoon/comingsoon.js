document.addEventListener('DOMContentLoaded', function () {

  
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

    if (themeBtn && themeIcon) {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            if (document.body.classList.contains('dark')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    const rtlBtn = document.getElementById('rtlBtn');

    if (rtlBtn) {
        const savedDirection = localStorage.getItem('direction');

        if (savedDirection === 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl');
            rtlBtn.classList.add('rtl-active');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        rtlBtn.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir');

            if (currentDir === 'ltr') {
                document.documentElement.setAttribute('dir', 'rtl');
                rtlBtn.classList.add('rtl-active');
                localStorage.setItem('direction', 'rtl');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                rtlBtn.classList.remove('rtl-active');
                localStorage.setItem('direction', 'ltr');
            }
        });
    }


    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const dEl = document.getElementById('cs-days');
    const hEl = document.getElementById('cs-hours');
    const mEl = document.getElementById('cs-mins');
    const sEl = document.getElementById('cs-secs');

    function pad(num) { return String(num).padStart(2, '0'); }

    function updateCountdown() {
        const now = new Date();
        let diff = Math.max(0, launchDate - now);

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

    
    const form = document.getElementById('csForm');
    const toast = document.getElementById('csToast');
    const toastClose = document.getElementById('csToastClose');
    let toastTimer = null;

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            if (!emailInput || !emailInput.value.trim()) return;

          
            if (toast) {
                toast.classList.add('show');
                clearTimeout(toastTimer);
                toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
            }

            form.reset();
        });
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });
    }

});
