document.addEventListener('DOMContentLoaded', function () {

   
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('contactToast');
    const toastClose = document.getElementById('contactToastClose');
    let toastTimer = null;

    function showToast() {
        if (!toast) return;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let valid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            });

            if (!valid) return;

            showToast();
            form.reset();
        });

        form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', () => field.classList.remove('invalid'));
        });
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
            clearTimeout(toastTimer);
        });
    }


    const locationCards = document.querySelectorAll('.location-card');

    function updateStoreStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 6 = Saturday
        const hour = now.getHours() + now.getMinutes() / 60;
        const isWeekend = (day === 0 || day === 6);

        locationCards.forEach(card => {
            const badge = card.querySelector('.status-badge');
            if (!badge) return;

            const openHour = parseFloat(isWeekend ? card.dataset.openWeekend : card.dataset.open);
            const closeHour = parseFloat(isWeekend ? card.dataset.closeWeekend : card.dataset.close);

            const isOpen = hour >= openHour && hour < closeHour;

            badge.textContent = isOpen ? 'Open Now' : 'Closed';
            badge.classList.toggle('open', isOpen);
            badge.classList.toggle('closed', !isOpen);
        });
    }

    if (locationCards.length) {
        updateStoreStatus();
        
        setInterval(updateStoreStatus, 60000);
    }

});
