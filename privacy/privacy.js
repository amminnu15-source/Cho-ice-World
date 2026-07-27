// ==========================
// Privacy Policy — Interactivity
// ==========================

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Dark Mode ---------- */
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

    /* ---------- RTL / LTR ---------- */
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

    /* ---------- Smooth scroll for TOC links ---------- */
    const tocLinks = document.querySelectorAll('#ppToc a');

    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- Scroll-spy: highlight active TOC link ---------- */
    const sections = document.querySelectorAll('.pp-section[id]');

    if ('IntersectionObserver' in window && sections.length && tocLinks.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    tocLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

        sections.forEach(section => observer.observe(section));
    }

});
