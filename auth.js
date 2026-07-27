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

  
    document.querySelectorAll('.toggle-pw').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            if (!input) return;

            const icon = btn.querySelector('i');
            const isHidden = input.type === 'password';

            input.type = isHidden ? 'text' : 'password';

            if (icon) {
                icon.classList.toggle('fa-eye', !isHidden);
                icon.classList.toggle('fa-eye-slash', isHidden);
            }
        });
    });


    const signupPassword = document.getElementById('signup-password');
    const strengthFill = document.getElementById('pwStrengthFill');
    const strengthLabel = document.getElementById('pwStrengthLabel');

    function scorePassword(value) {
        let score = 0;
        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value)) score++;
        if (/[0-9]/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;
        return score; // 0 - 4
    }

    if (signupPassword && strengthFill && strengthLabel) {
        signupPassword.addEventListener('input', () => {
            const score = scorePassword(signupPassword.value);
            const levels = [
                { width: '0%',   color: '#e57373', label: 'Password strength' },
                { width: '25%',  color: '#e57373', label: 'Weak' },
                { width: '50%',  color: '#ffb74d', label: 'Fair' },
                { width: '75%',  color: '#ffd54f', label: 'Good' },
                { width: '100%', color: '#2ecc71', label: 'Strong' }
            ];

            const level = signupPassword.value.length === 0 ? levels[0] : levels[score];

            strengthFill.style.width = level.width;
            strengthFill.style.background = level.color;
            strengthLabel.textContent = level.label;
        });
    }


    const toast = document.getElementById('authToast');
    const toastClose = document.getElementById('authToastClose');
    let toastTimer = null;

    function showToast() {
        if (!toast) return;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });
    }

  
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let valid = true;
            loginForm.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            });

            if (!valid) return;

           
            showToast();
        });

        loginForm.querySelectorAll('input').forEach(field => {
            field.addEventListener('input', () => field.classList.remove('invalid'));
        });
    }


    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let valid = true;
            signupForm.querySelectorAll('[required]').forEach(field => {
                if (field.type === 'checkbox' ? !field.checked : !field.value.trim()) {
                    valid = false;
                    if (field.type !== 'checkbox') field.classList.add('invalid');
                } else if (field.type !== 'checkbox') {
                    field.classList.remove('invalid');
                }
            });

            if (!valid) return;

           
            showToast();
        });

        signupForm.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]').forEach(field => {
            field.addEventListener('input', () => field.classList.remove('invalid'));
        });
    }

   
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          
            showToast();
        });
    });

});
