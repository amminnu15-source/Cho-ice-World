document.addEventListener('DOMContentLoaded', function () {

   
    const billingToggle = document.getElementById('billingToggle');
    const billingLabels = document.querySelectorAll('.billing-label');
    const planPrices = document.querySelectorAll('.plan-price');
    const planPeriods = document.querySelectorAll('.plan-period');

    if (billingToggle) {
        billingToggle.addEventListener('click', () => {
            const isYearly = billingToggle.classList.toggle('on');

            billingLabels.forEach(label => {
                const period = label.dataset.period;
                label.classList.toggle('active', (period === 'yearly') === isYearly);
            });

            planPrices.forEach(price => {
                const value = isYearly ? price.dataset.yearly : price.dataset.monthly;
                price.textContent = value;
            });

            planPeriods.forEach(period => {
                period.textContent = isYearly ? '/year' : '/month';
            });
        });
    }

  
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

    
        if (item.classList.contains('active') && answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');

              
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('active');
                        const otherAnswer = other.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                    }
                });

                if (isOpen) {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

  
    const revealTargets = document.querySelectorAll(
        '.plan-card, .testi-card, .faq-item, .compare-table-wrap'
    );

    if ('IntersectionObserver' in window && revealTargets.length) {
        revealTargets.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity .6s ease, transform .6s ease';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(el => observer.observe(el));
    }

});
